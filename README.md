# Kreaspora

Website untuk acara Kreaspora, sebuah platform untuk pendaftaran dan informasi lomba.

## Struktur Folder

```
kreaspora\
├───.gitignore
├───.htaccess
├───database.sql
├───next-env.d.ts
├───next.config.js
├───package-lock.json
├───package.json
├───postcss.config.js
├───README.md
├───server.js
├───tailwind.config.js
├───tsconfig.json
├───config\
│   └───config.php
├───out\
│   ├───404.html
│   ├───index.html
│   ├───lomba.html
│   ├───registration.html
│   ├───api\
│   │   └───register.php
│   ├───background\
│   │   ├───kreativitas-1.jpg
│   │   ├───kreativitas-2.jpg
│   │   ├───kreativitas-3.jpg
│   │   ├───melukis.jpg
│   │   ├───sport-1.jpg
│   │   ├───sport-2.jpg
│   │   └───sport-3.jpg
│   ├───img\
│   │   └───img_lomba\
│   │       ├───blue-2.jpg
│   │       └───blue.png
│   ├───lomba\
│   │   ├───index.html
│   │   ├───script.js
│   │   ├───style.css
│   │   └───img\
│   │       ├───logo.jpeg
│   │       └───img-lomba\
│   └───sponsors\
│       ├───logo_nesta.png
│       └───perari.png
├───panitia-kreaspora\
│   ├───config.php
│   ├───info.php
│   ├───login.php
│   ├───logout.php
│   ├───view.php
│   └───lib\
│       └───SimpleXLSXGen.php
├───public\
│   ├───api\
│   │   └───register.php
│   ├───background\
│   │   ├───kreativitas-1.jpg
│   │   ├───kreativitas-2.jpg
│   │   ├───kreativitas-3.jpg
│   │   ├───melukis.jpg
│   │   ├───sport-1.jpg
│   │   ├───sport-2.jpg
│   │   └───sport-3.jpg
│   ├───img\
│   │   └───img_lomba\
│   │       ├───blue-2.jpg
│   │       └───blue.png
│   ├───loading\
│   │   └───icon_loading.png
│   ├───lomba\
│   │   ├───index.html
│   │   ├───script.js
│   │   ├───style.css
│   │   └───img\
│   │       ├───logo.jpeg
│   │       └───img-lomba\
│   └───sponsors\
│       ├───logo_nesta.png
│       └───perari.png
└───src\
    ├───components\
    │   ├───layout\
    │   │   ├───FadeInBackground.js
    │   │   ├───Footer.js
    │   │   ├───Header.js
    │   │   └───Section.js
    │   ├───sections\
    │   │   ├───About.js
    │   │   ├───Contact.js
    │   │   ├───Hero.js
    │   │   ├───Navbar.js
    │   │   └───Programs.js
    │   └───ui\
    │       ├───CreativeSportsBackground.js
    │       ├───CustomCursor.js
    │       └───LoadingScreen.js
    ├───data\
    │   ├───landingPageData.js
    │   └───landingPageData.ts
    ├───img\
    │   └───logo.jpeg
    ├───pages\
    │   ├───_app.js
    │   ├───index.js
    │   ├───lomba.js
    │   └───registration.js
    └───styles\
        ├───About.js
        ├───globals.css
        ├───Header.js
        ├───LoadingScreen.module.css
        ├───Lomba.module.css
        └───Programs.js
```

## Fungsi

*   **Landing Page**: Halaman utama yang menampilkan informasi umum tentang acara Kreaspora.
*   **Pendaftaran Lomba**: Formulir bagi peserta untuk mendaftar pada berbagai lomba yang tersedia.
*   **Halaman Lomba**: Detail mengenai setiap lomba yang diadakan.
*   **Panel Panitia**: Halaman khusus untuk panitia guna mengelola data pendaftar.

## Teknologi yang Digunakan

### Frontend
*   **Next.js**: Framework React untuk membangun antarmuka pengguna.
*   **React**: Pustaka JavaScript untuk membangun komponen UI.
*   **Tailwind CSS**: Framework CSS untuk styling.

### Backend
*   **PHP**: Bahasa skrip sisi server untuk menangani logika pendaftaran dan panel panitia.
*   **Node.js**: Lingkungan runtime JavaScript yang digunakan oleh Next.js.

### Database
*   **MySQL/MariaDB**: Sistem manajemen basis data untuk menyimpan data pendaftaran.

## Tipe File Utama
*   `.js` / `.jsx`: File JavaScript dan React untuk logika frontend.
*   `.php`: File PHP untuk logika backend.
*   `.css`: File styling, termasuk yang dihasilkan oleh Tailwind CSS.
*   `.sql`: File dump database untuk struktur tabel.
*   `.json`: File konfigurasi untuk proyek Node.js.

## Tutorial Instalasi dan Menjalankan Proyek

1.  **Setup Lingkungan Server**:
    *   Pastikan Anda memiliki lingkungan server lokal seperti **XAMPP** atau **WAMP** yang sudah terinstal dan berjalan.
    *   Letakkan folder proyek `kreaspora` di dalam direktori `htdocs` (untuk XAMPP) atau `www` (untuk WAMP).

2.  **Setup Database**:
    *   Buka `phpMyAdmin` dari panel kontrol XAMPP Anda.
    *   Buat database baru (misalnya dengan nama `kreaspora_db`).
    *   Impor file `database.sql` ke dalam database yang baru saja Anda buat.
    *   Sesuaikan konfigurasi koneksi database di file `config/config.php` dan `panitia-kreaspora/config.php` agar sesuai dengan pengaturan database Anda (nama host, nama pengguna, kata sandi, nama database).

3.  **Instalasi Dependensi Frontend**:
    *   Pastikan Anda memiliki **Node.js** dan **npm** terinstal di sistem Anda.
    *   Buka terminal atau command prompt di direktori root proyek (`c:\xampp\htdocs\kreaspora`).
    *   Jalankan perintah berikut untuk menginstal semua dependensi yang diperlukan:
        ```bash
        npm install
        ```

4.  **Menjalankan Proyek**:
    *   **Backend (PHP)**: Layanan PHP akan berjalan secara otomatis melalui server Apache di XAMPP. Anda dapat mengakses panel panitia melalui URL seperti `http://localhost/kreaspora/panitia-kreaspora/login.php`.
    *   **Frontend (Next.js)**: Untuk menjalankan server pengembangan frontend, jalankan perintah berikut di terminal:
        ```bash
        npm run dev
        ```
    *   Buka browser dan akses `http://localhost:3000` untuk melihat halaman utama website.
```