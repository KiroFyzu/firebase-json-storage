# Dokumentasi Proyek Website Express.js

Proyek ini menunjukkan penggunaan **Express.js** untuk membuat server web sederhana. Ini mencakup konfigurasi dasar, routing, dan pengaturan middleware untuk menjalankan website secara lokal atau mendeploynya di Vercel.

## Persyaratan

Sebelum menjalankan aplikasi, pastikan Anda telah menginstal hal-hal berikut:

- **Node.js** (v12 atau yang lebih tinggi)
- **npm** (Node Package Manager)

## Memulai

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek secara lokal di mesin Anda:

### 1. Klon Repository

Klon repository ini ke mesin lokal Anda menggunakan Git:

```bash
git clone https://github.com/KiroFyzu/udin-CV.git
```

### 2. Instal Dependensi

Buka direktori proyek dan instal dependensi yang diperlukan:

```bash
cd express-website
npm install
```

### 3. Menyiapkan Variabel Lingkungan

Di root proyek Anda untuk mendefinisikan variabel lingkungan tertentu seperti:

```txt
PORT=3000
```

> Pastikan untuk menyesuaikan ini sesuai dengan lingkungan pengembangan Anda.

### 4. Memulai Server

Untuk memulai server, jalankan perintah berikut:

```bash
npm start
```

Ini akan menjalankan aplikasi pada port yang ditentukan (default adalah `3000`).

### 5. Mengakses Aplikasi

Buka browser web Anda dan buka `http://localhost:3000` untuk melihat website Anda dalam aksi.

## Hosting di Vercel

Untuk mendeploy proyek di **Vercel**, ikuti langkah-langkah berikut:

### 1. Daftar di Vercel

Buat akun di Vercel di [https://vercel.com/](https://vercel.com/) jika Anda belum memiliki akun.

### 2. Instal Vercel CLI

Instal Command Line Interface (CLI) Vercel secara global di mesin Anda:

```bash
npm install -g vercel
```

### 3. Login ke Vercel

Login ke akun Vercel Anda menggunakan CLI:

```bash
vercel login
```

Ikuti petunjuk untuk melakukan autentikasi.

### 4. Mendeploy Proyek

Untuk mendeploy aplikasi, jalankan perintah berikut di direktori proyek Anda:

```bash
vercel
```

CLI akan meminta Anda untuk mengkonfigurasi proyek untuk deployment. Setelah berhasil didedeploy, Vercel akan memberikan URL di mana aplikasi Anda di-host.

### 5. Melihat Website Anda

Setelah didedeploy, Anda dapat melihat website Anda di URL yang diberikan oleh Vercel.

## Penjelasan File

- **app.js**: File aplikasi utama yang mengatur server Express.js dan routing untuk website.

### Fungsi Utama:

- `startServer(port)`: Memulai server Express.js pada port yang ditentukan.
- `setupApp()`: Mengatur routing dan middleware (ini adalah placeholder untuk konfigurasi lebih lanjut).

## Contoh Kode

```javascript
const express = require('express');
const app = express();

/**
 * Memulai server Express.js pada port yang ditentukan.
 * 
 * @param {number} port - Nomor port untuk menjalankan server.
 */
function startServer(port) {
    app.listen(port, () => {
        console.log(`Server berjalan pada port ${port}`);
    });
}

/**
 * Mengatur routing dan middleware untuk aplikasi.
 */
function setupApp() {
    // Tambahkan routing dan middleware Anda di sini
}

// Inisialisasi aplikasi
setupApp();

// Export fungsi startServer untuk digunakan di file lain
module.exports = startServer;
```

## Dependensi

- **express**: Framework yang digunakan untuk membangun server web.
- **dotenv** (opsional, jika Anda menggunakan variabel lingkungan): Digunakan untuk memuat variabel lingkungan dari file `.env`.

### Untuk Menginstal Dependensi

Jalankan perintah berikut untuk menginstal dependensi yang terdaftar di `package.json`:

```bash
npm install
```

## Berkontribusi

Jika Anda ingin berkontribusi pada proyek ini, silakan fork dan buat pull request dengan perubahan Anda. Harap ikuti standar penulisan kode dan pastikan kode Anda terdokumentasi dengan baik.

## Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT - lihat file [LICENSE](LICENSE) untuk detailnya.

## Kontak

Untuk pertanyaan atau umpan balik, Anda dapat menghubungi pemelihara proyek di [kirofyzu@gmail.com](mailto:kirofyzu@gmail.com).