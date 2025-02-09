const { initializeApp } = require('firebase/app');
const { getStorage, ref, uploadBytes, getDownloadURL } = require('firebase/storage');

// Key Config ini milik orang lain, jangan disalahgunakan ya :)
// Jika ingin menggunakan Firebase Storage, silakan ganti dengan key milikmu sendiri
const firebaseConfig = {
  apiKey: "AIzaSyBmUIXJblRGF4HTCO3hOB8MykvLOq7whUE",
  authDomain: "project-web-kelas.firebaseapp.com",
  projectId: "project-web-kelas",
  storageBucket: "project-web-kelas.appspot.com",
  messagingSenderId: "202691312352",
  appId: "1:202691312352:web:e82e7a494e705b2a12ee85",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

module.exports = { storage, ref, uploadBytes, getDownloadURL };