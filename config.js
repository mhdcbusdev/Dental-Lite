/* =====================================================================
   DENTAL LITE — config.js
   ---------------------------------------------------------------------
   SATU-SATUNYA file yang perlu diedit kalau ada perubahan URL, nomor WA,
   atau kisaran biaya. form-dokter.html dan report-pasien.html sama-sama
   membaca dari sini, jadi tidak perlu edit dua file lagi.

   Setelah edit: commit di GitHub → tunggu 1-2 menit → hard refresh
   (Ctrl+Shift+R) untuk melihat perubahannya.
   ===================================================================== */

const CONFIG = {

  /* 1) WEB APP URL APPS SCRIPT  ← ini yang paling sering berubah
        Ambil dari: Deploy → Manage deployments → Web app → Copy URL

        ⚠️ Cara benar mengganti kode di Apps Script:
           Deploy → Manage deployments → ikon pensil (Edit)
           → Version: New version → Deploy
           URL tidak berubah, jadi baris di bawah TIDAK perlu diutak-atik.

        ❌ Kalau sampai pilih "New deployment", URL-nya berubah dan
           HARUS diganti di baris ini. */
  API_URL: "https://script.google.com/macros/s/AKfycbxqgT2avVWm3n4kV-S7CsMOedQpRVYu90BoKwuHqXT_6IMvuB5w4R4bs3VzcuESe7Sm/exec",


  /* 2) ALAMAT HALAMAN RAPOR PASIEN di GitHub Pages
        Ini HANYA catatan/acuan — yang dipakai membuat link rapor adalah
        PATIENT_PAGE_URL di Code.gs. Kalau nama repo atau nama file
        berubah, ganti di KEDUA tempat: baris ini dan Code.gs. */
  RAPOR_BASE: "https://mhdcbusdev.github.io/Dental-Lite/report-pasien.html",


  /* 3) NOMOR WA CRO — untuk tombol "Lihat Jadwal Perawatan" di rapor.
        Format 62xxx tanpa tanda + dan tanpa spasi.
        Kosongkan ("") kalau tombolnya mau disembunyikan. */
  WA_CRO: "6285162717531",

  /* Isi pesan otomatis saat pasien menekan tombol tersebut */
  WA_CRO_PESAN: "Halo, saya mau booking treatment lanjutan sesuai rekomendasi di dental report saya.",


  /* 4) KISARAN BIAYA — tampil di bagian "Prioritas Perawatan" pada rapor.
        Ubah angkanya di sini saja. Kosongkan ("") kalau item tersebut
        tidak ingin menampilkan biaya.

        ⚠️ Angka di bawah masih mengikuti file desain, BELUM dicek ke
           buku tarif. Tarif berbeda per region — mohon disesuaikan. */
  BIAYA: {
    saraf     : "Rp 1.500.000 – Rp 3.500.000 / gigi",
    tambalan  : "Rp 300.000 – Rp 700.000 / gigi",
    cabut     : "Rp 250.000 – Rp 500.000",
    scaling   : "Rp 300.000 – Rp 600.000",
    bungsu    : "Rp 150.000 – Rp 350.000",
    ortodonti : "Rp 150.000 – Rp 350.000",
    tiruan    : "Rp 3.000.000 – Rp 15.000.000 (tergantung pilihan)"
  }

};
