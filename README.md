# 🗺️ Sistem Pencarian Rute Terpendek Universitas Bengkulu

Sistem Pencarian Rute Terpendek Universitas Bengkulu merupakan aplikasi berbasis web yang dirancang untuk membantu pengguna menemukan jalur tercepat menuju lokasi tertentu di lingkungan Universitas Bengkulu. Sistem memanfaatkan data jaringan jalan dari OpenStreetMap dan menerapkan algoritma Dijkstra untuk menentukan rute dengan jarak terpendek.

## 📌 Fitur Utama

* Menampilkan peta interaktif Universitas Bengkulu.
* Menentukan lokasi awal dan lokasi tujuan.
* Menghitung rute terpendek menggunakan Algoritma Dijkstra.
* Menampilkan jalur hasil pencarian pada peta.
* Menghitung total jarak perjalanan.
* Menampilkan estimasi waktu tempuh.
* Mendukung beberapa moda transportasi:

  * Berjalan kaki
  * Sepeda
  * Kendaraan

---

## 🧠 Algoritma yang Digunakan

### Dijkstra Shortest Path Algorithm

Algoritma Dijkstra digunakan untuk mencari jalur terpendek pada graf berbobot positif. Pada sistem ini:

* Node (Vertex) merepresentasikan lokasi atau persimpangan jalan.
* Edge merepresentasikan ruas jalan.
* Weight (Bobot) berupa panjang jalan dalam meter.

Algoritma akan memilih jalur dengan total bobot terkecil dari titik awal menuju titik tujuan.

---

## 🏗️ Teknologi yang Digunakan

### Backend

* Python
* Flask
* Flask-CORS
* OSMnx
* NetworkX

### Frontend

* HTML
* CSS
* JavaScript
* Leaflet.js

### Data Source

* OpenStreetMap (OSM)

---

## 📂 Struktur Proyek

```bash
project/
│
├── app.py                 # Backend Flask
├── static/
│   ├── css/
│   │   └── style.css
│   │
│   └── js/
│       └── script.js
│
├── templates/
│   └── index.html
│
├── requirements.txt
│
└── README.md
```

## ▶️ Menjalankan Program

Jalankan backend Flask:

```bash
python app.py
```

Jika berhasil, akan muncul:

```bash
* Running on http://127.0.0.1:5000
```

Buka browser dan akses:

```text
http://127.0.0.1:5000
```

---

## 🔄 Alur Kerja Sistem

1. Pengguna membuka website.
2. Sistem menampilkan peta Universitas Bengkulu.
3. Pengguna memilih lokasi awal dan tujuan.
4. Frontend mengirim data koordinat ke backend.
5. Backend mencari node terdekat pada graf jalan.
6. Algoritma Dijkstra menghitung rute terpendek.
7. Sistem menghitung jarak dan estimasi waktu tempuh.
8. Hasil dikirim ke frontend.
9. Rute ditampilkan pada peta interaktif.

---

## 📊 Kompleksitas Algoritma

Algoritma Dijkstra yang digunakan melalui library NetworkX memiliki kompleksitas:

[
O((V + E)\log V)
]

Dimana:

* **V** = jumlah node
* **E** = jumlah edge

Kompleksitas ini cukup efisien untuk pencarian rute pada lingkungan kampus.

---

## 🎯 Tujuan Pengembangan

Proyek ini dikembangkan untuk:
* Membantu mahasiswa baru mengenali lingkungan kampus.
* Membantu pengunjung menemukan lokasi tujuan dengan mudah.
* Mengimplementasikan konsep Teori Graf dan Algoritma Dijkstra.
* Menerapkan konsep Kecerdasan Buatan pada permasalahan pencarian rute.

---

Proyek ini dikembangkan untuk keperluan akademik dan pembelajaran pada mata kuliah Kecerdasan Buatan Program Studi Teknik Informatika Universitas Bengkulu.
