<?php
// ===== ERROR HANDLING =====
ini_set('display_errors', 1);
error_reporting(E_ALL);

register_shutdown_function(function () {
    $error = error_get_last();
    if ($error !== null && in_array($error['type'], [E_ERROR, E_CORE_ERROR, E_COMPILE_ERROR, E_USER_ERROR])) {
        if (ob_get_length()) ob_end_clean();
        http_response_code(500);
        header('Content-Type: application/json; charset=UTF-8');
        echo json_encode(['status' => 'error', 'message' => 'Fatal server error.', 'error_detail' => $error]);
        exit();
    }
});

// ===== CORS & PREFLIGHT HANDLING =====
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Max-Age: 3600");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(204);
    exit();
}

header("Content-Type: application/json; charset=UTF-8");

// --- MEMUAT KONFIGURASI ---
$config = require __DIR__ . '/../../config/config.php';

// --- KONFIGURASI DATABASE ---
$db_config = $config['db'];
$servername = $db_config['host'];
$username = $db_config['username'];
$password = $db_config['password'];
$dbname = $db_config['dbname'];

// --- KONEKSI ---
try {
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        throw new Exception('Koneksi database gagal: ' . $conn->connect_error);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
    exit();
}

// --- MEMBACA DATA ---
$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Tidak ada data yang diterima atau format JSON tidak valid.']);
    exit();
}

// --- VALIDASI DATA ---
$competition = $data['competition'] ?? null;
$group = $data['group'] ?? null;
$group_selection = $data['group_selection'] ?? null;
$participants = $data['participants'] ?? [];

if (!$competition || !$group || empty($participants) || !$group_selection) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Data tidak lengkap. Lomba, grup, pilihan grup/kelas, dan peserta harus diisi.']);
    exit();
}

// --- CEK DUPLIKAT --- 
// Logika: Sebuah tim/kelas tidak boleh mendaftar di lomba yang sama lebih dari sekali.
try {
    $stmt_check = $conn->prepare("SELECT id FROM registrations WHERE competition = ? AND group_selection = ?");
    if ($stmt_check === false) throw new Exception('Gagal mempersiapkan statement pengecekan: ' . $conn->error);
    $stmt_check->bind_param("ss", $competition, $group_selection);
    $stmt_check->execute();
    $result = $stmt_check->get_result();
    if ($result->num_rows > 0) {
        http_response_code(409); // 409 Conflict
        echo json_encode(['status' => 'exists', 'message' => "Grup/Kelas '{$group_selection}' sudah terdaftar di lomba '{$competition}'. Pendaftaran ganda tidak diizinkan."]);
        $stmt_check->close();
        $conn->close();
        exit();
    }
    $stmt_check->close();
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Gagal melakukan pengecekan duplikat.', 'error_detail' => $e->getMessage()]);
    exit();
}


// --- PROSES PENYIMPANAN DATA ---
$conn->begin_transaction();
try {
    $stmt = $conn->prepare("INSERT INTO registrations (competition, group_name, group_selection) VALUES (?, ?, ?)");
    if ($stmt === false) throw new Exception('Gagal mempersiapkan statement registrasi: ' . $conn->error);
    $stmt->bind_param("sss", $competition, $group, $group_selection);
    $stmt->execute();

    $registration_id = $conn->insert_id;

    $stmt_participant = $conn->prepare("INSERT INTO participants (registration_id, participant_name, participant_class) VALUES (?, ?, ?)");
    if ($stmt_participant === false) throw new Exception('Gagal mempersiapkan statement peserta: ' . $conn->error);
    foreach ($participants as $participant) {
        $name = $participant['name'];
        $class = $participant['class'];
        $stmt_participant->bind_param("iss", $registration_id, $name, $class);
        $stmt_participant->execute();
    }

    $conn->commit();

    // ===== KIRIM DATA KE N8N WEBHOOK =====
    try {
        $n8n_webhook_url = $config['n8n']['webhook_url'];
        
        // Data yang dikirim ke n8n adalah data yang sama dari form, ditambah registration_id
        $n8n_data = $data; 
        $n8n_data['registration_id'] = $registration_id;

        $ch = curl_init($n8n_webhook_url);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($n8n_data));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10); // Set timeout 10 detik
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen(json_encode($n8n_data)))
        );
        
        // Eksekusi cURL. Proses ini tidak akan menghentikan pendaftaran jika webhook gagal.
        curl_exec($ch);
        // Tidak ada error handling cURL yang mendalam agar tidak memperlambat response ke user
        curl_close($ch);
    } catch (Exception $e) {
        // Jangan hentikan proses, cukup catat error jika ada sistem logging
        // error_log("Gagal mengirim ke n8n: " . $e->getMessage());
    }
    // =====================================

    http_response_code(201);
    echo json_encode(['status' => 'success', 'message' => 'Pendaftaran berhasil!']);

} catch (Exception $e) {
    $conn->rollback();
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Gagal menyimpan data: ' . $e->getMessage(), 'error_detail' => $e->getTraceAsString()]);
}

if (isset($stmt)) $stmt->close();
if (isset($stmt_participant)) $stmt_participant->close();
$conn->close();
?>
