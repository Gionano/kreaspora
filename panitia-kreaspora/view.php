<?php
// Aktifkan pelaporan kesalahan untuk debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

session_start();

// Sertakan file konfigurasi database
require_once 'config.php';

// Jika pengguna tidak login, arahkan ke halaman login.
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    header('Location: login.php');
    exit;
}

// Fungsi bantuan untuk mengambil data untuk kategori tertentu
function get_competition_data($conn, $category_name = null) {
    $sql = "
        SELECT 
            ROW_NUMBER() OVER (ORDER BY r.id ASC) AS nomor_urut,
            r.id, r.competition, r.group_name, r.group_selection, r.registration_time,
            GROUP_CONCAT(CONCAT(p.participant_name, IF(p.participant_class IS NOT NULL, CONCAT(' (', p.participant_class, ')'), '')) SEPARATOR '; ') AS participants_list
        FROM registrations r
        LEFT JOIN participants p ON r.id = p.registration_id
    ";
    if ($category_name) {
        $sql .= " WHERE LOWER(r.group_name) = ?";
    }
    $sql .= " GROUP BY r.id ORDER BY r.id ASC;";

    $stmt = $conn->prepare($sql);
    if ($category_name) {
        $stmt->bind_param("s", $category_name);
    }
    $stmt->execute();
    $result = $stmt->get_result();
    $data = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    }
    $stmt->close();
    return $data;
}

// LOGIKA UNDUH CSV
if (isset($_GET['download']) && $_GET['download'] === 'csv' && isset($_GET['category'])) {
    ob_start();
    
    // Koneksi sudah dibuat di config.php, jadi kita bisa langsung menggunakannya
    global $conn; // Gunakan variabel koneksi global

    $category = $_GET['category'];
    $data = [];
    $filename_part = 'semua';

    $categories = [
        'per-kelas' => 'per kelas',
        'per-jurusan-perangkatan' => 'per jurusan perangkatan',
        'per-jurusan' => 'perjurusan'
    ];

    if (array_key_exists($category, $categories)) {
        $data = get_competition_data($conn, $categories[$category]);
        $filename_part = str_replace('-', ' ', $category);
    } elseif ($category === 'all') {
        $data = get_competition_data($conn); // Ambil semua data
    }

    ob_end_clean(); // Bersihkan buffer sebelum mengirim header

    $filename = 'data-pendaftaran-' . $filename_part . '-' . date("Y-m-d") . '.csv';
    header('Content-Type: text/csv; charset=utf-8');
    header('Content-Disposition: attachment; filename="' . $filename . '"');
    $output = fopen('php://output', 'w');
    fputcsv($output, ['No.', 'Lomba', 'Grup', 'Pilihan Grup/Kelas', 'Waktu Daftar', 'Peserta']);
    foreach ($data as $row) {
        fputcsv($output, [
            $row['nomor_urut'],
            $row['competition'],
            $row['group_name'],
            $row['group_selection'],
            $row['registration_time'],
            $row['participants_list']
        ]);
    }
    fclose($output);
    // Tidak perlu menutup koneksi di sini karena akan ditutup di akhir skrip utama
    exit();
}

// Fungsi bantuan untuk merender tabel
function render_registration_table($title, $data, $table_id, $category_key) {
    echo '<div class="mb-12">';
    echo '<div class="flex items-center justify-between mb-4">';
    echo '<h2 class="text-2xl font-bold text-gray-800">' . htmlspecialchars($title) . '</h2>';
    echo '<a href="?download=csv&category=' . $category_key . '" class="inline-flex items-center justify-center px-3 py-2 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition shadow-sm">Download CSV</a>';
    echo '</div>';

    if (empty($data)) {
        echo '<p class="p-6 text-center text-gray-500 bg-white rounded-lg shadow">Belum ada data pendaftaran untuk kategori ini.</p>';
        echo '</div>';
        return;
    }
    echo '<div class="bg-white rounded-lg shadow-lg overflow-hidden">';
    echo '<div class="overflow-x-auto">';
    echo '<table id="' . $table_id . '" class="w-full text-left registration-table">';
    echo '<thead class="bg-gray-50 border-b border-gray-200"><tr>';
    echo '<th class="p-4 text-sm font-semibold text-gray-600">No.</th>';
    echo '<th class="p-4 text-sm font-semibold text-gray-600">Lomba</th>';
    echo '<th class="p-4 text-sm font-semibold text-gray-600">Grup</th>';
    echo '<th class="p-4 text-sm font-semibold text-gray-600">Pilihan Grup/Kelas</th>';
    echo '<th class="p-4 text-sm font-semibold text-gray-600">Waktu Daftar</th>';
    echo '<th class="p-4 text-sm font-semibold text-gray-600">Peserta</th>';
    echo '</tr></thead><tbody class="divide-y divide-gray-200">';
    foreach ($data as $row) {
        echo "<tr>";
        echo "<td class='p-4 text-sm text-gray-500'>" . htmlspecialchars($row["nomor_urut"]) . "</td>";
        echo "<td class='p-4 text-sm text-gray-800 font-medium'>" . htmlspecialchars($row["competition"]) . "</td>";
        echo "<td class='p-4 text-sm text-gray-500'>" . htmlspecialchars($row["group_name"]) . "</td>";
        echo "<td class='p-4 text-sm text-gray-500'>" . htmlspecialchars($row["group_selection"]) . "</td>";
        echo "<td class='p-4 text-sm text-gray-500'>" . date("d M Y, H:i", strtotime($row["registration_time"])) . "</td>";
        echo "<td class='p-4 text-sm text-gray-800'>" . str_replace('; ', '<br>', htmlspecialchars($row["participants_list"])) . "</td>";
        echo "</tr>";
    }
    echo '</tbody></table>';
    echo '</div></div></div>';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Pendaftar Lomba - Kreaspora</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: #888; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #555; }
    </style>
</head>
<body class="bg-gray-100 text-gray-800 font-sans">

<div class="container mx-auto p-4 sm:p-6 lg:p-8">
    <header class="mb-8 flex justify-between items-center">
        <div>
            <h1 class="text-4xl font-bold text-gray-900">Dashboard Pendaftaran</h1>
            <p class="text-gray-600 mt-1">Selamat datang, <?php echo htmlspecialchars($_SESSION['username']); ?>!</p>
        </div>
        <a href="logout.php" class="inline-flex items-center justify-center px-4 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition shadow-sm">Logout</a>
    </header>

    <div class="bg-white rounded-lg shadow-lg p-6 border-b border-gray-200 mb-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <div class="w-full sm:w-1/2 mb-4 sm:mb-0">
                <label for="searchInput" class="sr-only">Cari Pendaftar</label>
                <input type="text" id="searchInput" onkeyup="filterTables()" placeholder="Cari di semua tabel..." class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition">
            </div>
            <div class="flex items-center">
                <a href="?download=csv&category=all" class="inline-flex items-center justify-center px-4 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    Download Semua (CSV)
                </a>
            </div>
        </div>
    </div>

    <?php
    // Koneksi sudah tersedia dari variabel $conn di config.php
    if (!$conn) {
        die("<p class='p-6 text-red-500 text-center'>Koneksi database gagal. Periksa file config.php</p>");
    }

    $categories_to_display = [
        'Lomba Perkelas' => 'per-kelas',
        'Lomba Perjurusan Perangkatan' => 'per-jurusan-perangkatan',
        'Lomba Perjurusan' => 'per-jurusan'
    ];
    
    $db_categories = [
        'per-kelas' => 'per kelas',
        'per-jurusan-perangkatan' => 'per jurusan perangkatan',
        'per-jurusan' => 'perjurusan'
    ];

    $table_index = 0;
    foreach ($categories_to_display as $title => $category_key) {
        $data = get_competition_data($conn, $db_categories[$category_key]);
        render_registration_table($title, $data, 'registrationTable-' . $table_index++, $category_key);
    }

    $conn->close();
    ?>
</div>

<footer class="text-center mt-8 text-sm text-gray-500">
    <p>&copy; <?php echo date("Y"); ?> Giovano. Semua hak dilindungi undang-undang.</p>
</footer>

<script>
function filterTables() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toUpperCase();
    const tables = document.querySelectorAll(".registration-table");

    tables.forEach(table => {
        const trs = table.getElementsByTagName("tr");
        for (let i = 1; i < trs.length; i++) { // Mulai dari 1 untuk melewati header tabel
            const tds = trs[i].getElementsByTagName("td");
            let found = false;
            for (let j = 0; j < tds.length; j++) {
                const td = tds[j];
                if (td) {
                    if (td.textContent.toUpperCase().indexOf(filter) > -1) {
                        found = true;
                        break;
                    }
                }
            }
            if (found) {
                trs[i].style.display = "";
            } else {
                trs[i].style.display = "none";
            }
        }
    });
}
</script>

</body>
</html>
