// Data contoh (harga per kg, Semarang)
const komoditas = [
  { nama: "Cabai rawit merah", harga: 62000, perubahan: 4.2,  kategori: "sayur" },
  { nama: "Bawang merah",      harga: 38000, perubahan: 0,    kategori: "sayur" },
  { nama: "Bawang putih",      harga: 34000, perubahan: -1.1, kategori: "sayur" },
  { nama: "Beras medium",      harga: 13500, perubahan: 0,    kategori: "pokok" },
  { nama: "Gula pasir",        harga: 18500, perubahan: 0.5,  kategori: "pokok" },
  { nama: "Minyak goreng",     harga: 18000, perubahan: -0.8, kategori: "pokok" },
  { nama: "Telur ayam",        harga: 29000, perubahan: 2.1,  kategori: "protein" },
  { nama: "Daging ayam",       harga: 38000, perubahan: 0,    kategori: "protein" }
];

const grid = document.querySelector("#price-grid");
const filterWrap = document.querySelector("#filters");
const selectBahan = document.querySelector("#bahan");
const inputBatas = document.querySelector("#batas");
const tombolSimpan = document.querySelector("#btn-simpan");
const pesan = document.querySelector("#pesan");

function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

function labelPerubahan(p) {
  if (p > 0) return { teks: "Naik " + String(p).replace(".", ",") + "%", kelas: "naik" };
  if (p < 0) return { teks: "Turun " + String(Math.abs(p)).replace(".", ",") + "%", kelas: "turun" };
  return { teks: "Stabil", kelas: "stabil" };
}

// ===== Fitur 1: tampilkan dan filter kartu harga =====
function tampilkanKartu(kategori) {
  grid.innerHTML = "";
  komoditas
    .filter(function (k) { return kategori === "semua" || k.kategori === kategori; })
    .forEach(function (k) {
      const label = labelPerubahan(k.perubahan);
      const kartu = document.createElement("article");
      kartu.className = "price-card";
      kartu.innerHTML =
        "<h3>" + k.nama + "</h3>" +
        "<p class='harga'>" + formatRupiah(k.harga) + "</p>" +
        "<span class='badge " + label.kelas + "'>" + label.teks + "</span>";
      grid.appendChild(kartu);
    });
}

filterWrap.addEventListener("click", function (e) {
  const tombol = e.target.closest(".filter");
  if (!tombol) return;
  document.querySelectorAll(".filter").forEach(function (t) { t.classList.remove("active"); });
  tombol.classList.add("active");
  tampilkanKartu(tombol.dataset.kategori);
});

// ===== Fitur 2: cek batas harga dengan validasi =====
komoditas.forEach(function (k, i) {
  const opsi = document.createElement("option");
  opsi.value = i;
  opsi.textContent = k.nama;
  selectBahan.appendChild(opsi);
});

function tampilkanPesan(teks, tipe) {
  pesan.textContent = teks;
  pesan.classList.remove("ok", "warn", "error");
  pesan.classList.add(tipe);
}

tombolSimpan.addEventListener("click", function () {
  const item = komoditas[selectBahan.value];
  const batas = Number(inputBatas.value);

  if (inputBatas.value.trim() === "" || isNaN(batas) || batas < 1) {
    tampilkanPesan("Batas harga belum valid. Isi angka 1 atau lebih.", "error");
    inputBatas.focus();
    return;
  }

  if (item.harga >= batas) {
    tampilkanPesan("Harga " + item.nama + " hari ini (" + formatRupiah(item.harga) + ") sudah melewati batas " + formatRupiah(batas) + ".", "warn");
  } else {
    tampilkanPesan("Peringatan aktif. Anda akan diberi tahu jika harga " + item.nama + " mencapai " + formatRupiah(batas) + ".", "ok");
  }
});

// ===== Fitur 3: accordion FAQ =====
const faq = document.querySelector(".faq");

faq.addEventListener("click", function (e) {
  const tombol = e.target.closest(".faq-q");
  if (!tombol) return;
  const terbuka = tombol.parentElement.classList.toggle("open");
  tombol.setAttribute("aria-expanded", terbuka);
});

tampilkanKartu("semua");
