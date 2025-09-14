<?php
session_start();

// Jika sudah login, redirect ke view.php
if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] === true) {
    header('Location: view.php');
    exit;
}

$error = '';

// Cek jika form disubmit
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Koneksi Database
    $servername = "localhost";
    $username_db = "mpkosis1_admin";
    $password_db = "}1y[I8,{Vn]k,XRE";
    $dbname = "mpkosis1_kreaspora";
    $conn = new mysqli($servername, $username_db, $password_db, $dbname);

    if ($conn->connect_error) {
        // Jangan tampilkan error koneksi detail di production
        $error = 'Terjadi masalah koneksi ke database.';
    } else {
        if (isset($_POST['username']) && isset($_POST['password'])) {
            $username_post = $_POST['username'];
            $password_post = $_POST['password'];

            // Prepare statement untuk keamanan
            $stmt = $conn->prepare("SELECT username, password_hash FROM panitia WHERE username = ?");
            $stmt->bind_param("s", $username_post);
            $stmt->execute();
            $result = $stmt->get_result();

            if ($result->num_rows === 1) {
                $user = $result->fetch_assoc();
                // Verifikasi password
                if (password_verify($password_post, $user['password_hash'])) {
                    $_SESSION['loggedin'] = true;
                    $_SESSION['username'] = $user['username'];
                    header('Location: view.php');
                    exit;
                } else {
                    $error = 'Username atau password salah.';
                }
            } else {
                $error = 'Username atau password salah.';
            }
            $stmt->close();
        } else {
            $error = 'Mohon isi semua field.';
        }
        $conn->close();
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Panitia Kreaspora</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 flex items-center justify-center h-screen">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 class="text-3xl font-bold text-center text-gray-900">Login Panitia</h2>
        <form class="space-y-6" method="POST" action="login.php">
            <div>
                <label for="username" class="text-sm font-medium text-gray-700">Username</label>
                <input type="text" name="username" id="username" required class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm">
            </div>
            <div>
                <label for="password" class="text-sm font-medium text-gray-700">Password</label>
                <input type="password" name="password" id="password" required class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm">
            </div>
            <?php if ($error): ?>
                <p class="text-sm text-red-600"><?php echo $error; ?></p>
            <?php endif; ?>
            <div>
                <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">Login</button>
            </div>
        </form>
    </div>
</body>
</html>