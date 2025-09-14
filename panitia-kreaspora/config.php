<?php
// File: config.php

// **Pengaturan Database** //
// Ganti nilai-nilai di bawah ini dengan informasi yang benar dari penyedia hosting web Anda.

/** Nama server database (biasanya 'localhost') */
define('DB_SERVER', 'localhost');

/** Nama pengguna database */
define('DB_USERNAME', 'mpkosis1_admin');

/** Kata sandi database */
define('DB_PASSWORD', '}1y[I8,{Vn]k,XRE');

/** Nama database */
define('DB_NAME', 'mpkosis1_kreaspora');

/* Jangan mengubah apa pun di bawah baris ini */

// Buat koneksi
$conn = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

// Periksa koneksi
if ($conn->connect_error) {
    // Alih-alih menghentikan skrip, kita bisa menampilkan pesan yang lebih ramah
    // atau mencatat kesalahan tanpa menampilkannya kepada pengguna di lingkungan produksi.
    die("Koneksi database gagal: " . $conn->connect_error);
}
?>