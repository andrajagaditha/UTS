# SiagaHarga

Website pemantau harga bahan pokok untuk warung makan dan katering di Semarang. Proyek ini dibuat untuk **Tugas 3 (UTS) mata kuliah Pemrograman Web Dasar**: Menambahkan Interaktivitas pada Halaman Web dengan JavaScript.

> Data harga pada halaman ini hanya **data contoh** untuk keperluan tugas, bukan data harga asli.

## Informasi Mahasiswa

| | |
|---|---|
| Nama | Diyandra Jagadditha |
| NIM | A12.2025.07407 |
| Kelas | A12.6203 |
| Program Studi | Sistem Informasi-S1, Universitas Dian Nuswantoro |
| Mata Kuliah | Pemrograman Web Dasar (A12.76305) |

## Demo

- Halaman web: `https://andrajagaditha.github.io/UTS/`
- Repository: `https://github.com/andrajagaditha/UTS`

## Fitur Interaktif

### 1. Filter Kartu Harga
Kartu harga komoditas dibuat secara dinamis dari data di `script.js`. Pengguna bisa menyaring berdasarkan kategori: Semua, Bumbu dan sayur, Pangan pokok, dan Protein. Setiap kartu menampilkan harga per kilogram dan label perubahan (naik, turun, atau stabil).

### 2. Form Cek Batas Harga dengan Validasi
Pengguna memilih bahan dan mengisi batas harga. Saat form dikirim, JavaScript memvalidasi input:
- kolom tidak boleh kosong,
- harus berupa angka,
- nilai minimal 1.

Jika tidak valid, kolom diberi border merah, muncul pesan error, dan fokus kembali ke kolom input. Jika valid, hasilnya dibandingkan dengan harga hari ini dan ditampilkan sebagai pesan.

### 3. Accordion FAQ
Bagian Pertanyaan Umum menampilkan jawaban saat pertanyaan diklik dan menyembunyikannya saat diklik lagi. Atribut `aria-expanded` ikut diperbarui untuk aksesibilitas.

## Teknik Manipulasi DOM yang Digunakan

| Teknik | Digunakan untuk |
|---|---|
| `document.querySelector()` | Memilih elemen grid, filter, form, dan FAQ |
| `addEventListener()` | Event `click` (filter, FAQ) dan `submit` (form) |
| Event delegation (`e.target.closest()`) | Menangani klik tombol filter dan pertanyaan FAQ |
| `document.createElement()` dan `appendChild()` | Membuat kartu harga dan opsi dropdown |
| `innerHTML` | Mengisi isi kartu dan mengosongkan grid |
| `classList.add()`, `remove()`, `toggle()` | Tombol aktif, tipe pesan, dan buka tutup accordion |
| `style` | Menandai kolom input yang tidak valid |
| `dataset` | Membaca kategori dari atribut `data-kategori` |
| `setAttribute()` | Memperbarui `aria-expanded` |

## Teknologi

- HTML5
- CSS3 (Flexbox, Grid, media query, custom properties)
- JavaScript (vanilla, tanpa library)
- Google Fonts (Playfair Display)

## Struktur Proyek

```
UTS/
├── index.html   # Struktur halaman
├── style.css    # Tampilan dan responsif
├── script.js    # Logika interaksi dan manipulasi DOM
└── README.md
```

## Cara Menjalankan

1. Unduh atau clone repository ini.
2. Pastikan `index.html`, `style.css`, dan `script.js` berada di folder yang sama.
3. Buka `index.html` di browser, atau jalankan dengan ekstensi Live Server di VS Code.

```bash
git clone https://github.com/andrajagaditha/UTS.git
cd UTS
```

## Sumber Data (Rujukan)

Daftar sumber pada halaman hanya rujukan tampilan. Tautannya mengarah ke situs aslinya:
PIHPS Bank Indonesia, Panel Harga Pangan, SP2KP Kemendag, BMKG, dan Telegram.

## Catatan Pengembangan

Riwayat commit memakai pesan deskriptif, misalnya:
- `feat: adjustment at landing page and add data source in sumber data`
- `feat: add faq with accordion`
