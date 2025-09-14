-- 1. Gunakan database yang sudah ada
USE mpkosis1_kreaspora;

-- 2. Hapus tabel lama jika ada (urutan penting karena ada foreign key)
-- Tabel `participants` dihapus lebih dulu
DROP TABLE IF EXISTS participants;
-- Tabel `panitia` juga bisa dihapus di sini
DROP TABLE IF EXISTS panitia;
-- Tabel `registrations` dihapus setelahnya
DROP TABLE IF EXISTS registrations;

-- 3. Buat kembali tabel `registrations`
CREATE TABLE registrations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    competition VARCHAR(255) NOT NULL,
    group_name VARCHAR(255) NOT NULL,
    group_selection VARCHAR(255),
    registration_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Buat kembali tabel `participants`
CREATE TABLE participants (
    id INT AUTO_INCREMENT PRIMARY KEY,
    registration_id INT NOT NULL,
    participant_name VARCHAR(255) NOT NULL,
    participant_class VARCHAR(255),
    FOREIGN KEY (registration_id) REFERENCES registrations(id) ON DELETE CASCADE
);

-- 5. Buat tabel untuk `panitia`
CREATE TABLE `panitia` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 6. Tambahkan data default untuk tabel `panitia`
-- Pengguna default adalah:
-- Username: admin
-- Password: password
INSERT INTO `panitia` (`id`, `username`, `password_hash`) VALUES
(1, 'admin', '$2y$10$9.M/B0O5g2z.9w2j.E2u.OUMc.5Y.3g.7r.9w2j.E2u.OUMc.5Y.');


-- Catatan: Perintah `CREATE DATABASE` dihapus agar tidak error jika database sudah ada.
-- Cukup jalankan `USE kreaspora;` untuk memilih database yang aktif.

SELECT
    ROW_NUMBER() OVER (ORDER BY id ASC) AS nomor_urut,
    id AS registration_id_asli,
    competition,
    group_name,
    group_selection,
    registration_time
FROM
    registrations
ORDER BY
    id ASC;
