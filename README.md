# Rakha Profil

Situs web profil resmi 3 halaman bertema terang (*light theme*) dengan bahasa Indonesia formal untuk **Rakha Irawan Syahputra** (SMK Telkom Malang — Teknik Komputer & Jaringan).

## Struktur Halaman

1. `index.html` — Halaman pertama berisi pembukaan formal dan judul **Rakha Profil**.
2. `profil.html` — Halaman kedua berisi profil pribadi (Nama, Umur, *Student of* SMK Telkom Malang, Jurusan Teknik Komputer & Jaringan).
3. `kontak.html` — Halaman ketiga berisi informasi kontak resmi melalui Instagram.
4. `vercel.json` — Konfigurasi deployment statis untuk Vercel (`cleanUrls: true` dan header keamanan HTTP).

## Menyesuaikan Username Instagram

Buka `kontak.html`, lalu ubah `@rakha.irawan` dan tautan `https://www.instagram.com/rakha.irawan/` ke username Instagram Anda yang sebenarnya.

## Cara Menampilkan di Vercel

### Opsi 1: Melalui GitHub + Dashboard Vercel (Disarankan)
1. Unggah folder `rakha-profil` ini ke repositori GitHub Anda.
2. Masuk ke [vercel.com](https://vercel.com), pilih **Add New... -> Project**, lalu impor repositori tersebut.
3. Biarkan **Framework Preset** pada `Other` dan **Output Directory** pada `.` (default).
4. Klik **Deploy**.

### Opsi 2: Melalui Vercel CLI
Jalankan perintah berikut di dalam folder proyek:
```bash
npx vercel
```
Untuk mempublikasikan langsung ke produksi:
```bash
npx vercel --prod
```
