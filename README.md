# Firebase Storage Uploader

Program ini adalah contoh backend menggunakan **Express.js** untuk mengunggah file ke **Firebase Storage**. File yang diunggah akan disimpan di Firebase Storage, dan program akan mengembalikan URL download untuk mengakses file tersebut.

## 📊 Vercel status
![Vercel Deploy](https://vercelbadge.vercel.app/api/KiroFyzu/firebase-json-storage)
## 🚀 Cara Menggunakan

1. Clone repository ini:
   ```sh
   git clone https://github.com/kirofyzu/firebase-json-storage.git
   ```
2. Masuk ke direktori proyek:
   ```sh
   cd firebase-json-storage
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Tambahkan konfigurasi Firebase Anda di file `firebaseConfig.js`.
5. Jalankan server:
   ```sh
   node server.js
   ```
6. Gunakan endpoint `/upload` untuk mengunggah file.

---

## 📂 Konfigurasi Folder Penyimpanan

- **Default Direktori Upload:** `../../tmp/` (untuk hosting di Vercel).
- Jika hosting secara lokal atau di server dedicated, ubah ke `./tmp/` dalam file `app.js`.

---

## 📌 Contoh Penggunaan

### 🔹 Mengunggah File Menggunakan cURL
```sh
curl -X POST -F "file=@path/to/your/file.jpg" http://localhost:3000/upload
```

### 🔹 Mengunggah File Menggunakan Postman
1. Pilih method **POST**.
2. Masukkan URL:
   ```
   http://localhost:3000/upload
   ```
3. Pilih tab **Body** > **form-data**.
4. Tambahkan key `file` dan pilih file yang akan diunggah.

---

## 📁 Struktur Repository
```
firebase-json-storage/
├── firebaseConfig.js       # Konfigurasi Firebase
├── app.js                  # Server Endpoint
├── tmp/                    # Folder penyimpanan sementara file
├── package.json            # Dependencies dan scripts
└── README.md               # Dokumentasi repository
```

---

## 🔗 Link Repository

🔗 [Firebase Storage Uploader with Express.js](https://github.com/kirofyzu/firebase-json-storage)

---

## ⚠️ Catatan

- Pastikan aturan keamanan Firebase Storage diatur untuk mengizinkan upload file.
- Repository ini menggunakan **Firebase Client SDK**, yang cocok untuk penggunaan sederhana.
- Untuk operasi admin, disarankan menggunakan **Firebase Admin SDK**.

---

## 📝 Todo
- Menyimpan URL file yang sudah di-upload ke database.

