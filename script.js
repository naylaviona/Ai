var map = L.map('map').setView([-3.7575, 102.2725], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const btnRute = document.getElementById("btnRute");
const btnDaftar = document.getElementById("btnDaftar");
const sectionRute = document.getElementById("sectionRute");
const sectionDaftar = document.getElementById("sectionDaftar");
const listContainer = document.getElementById("listGedungContainer");
const modeBox = document.getElementById("modeTransportasiBox"); 

btnDaftar.onclick = () => {
    sectionRute.style.display = "none";
    if (modeBox) modeBox.style.display = "none"; 
    sectionDaftar.style.display = "flex";        
    btnDaftar.classList.add("active");
    btnRute.classList.remove("active");
    tampilkanDaftarGedung();
};

btnRute.onclick = () => {
    sectionRute.style.display = "block";
    if (modeBox) modeBox.style.display = "block"; 
    sectionDaftar.style.display = "none";
    btnRute.classList.add("active");
    btnDaftar.classList.remove("active");
};

function tampilkanDaftarGedung() {
    if (!listContainer) return;
    listContainer.innerHTML = ""; 

    for (let key in nodes) {
        const item = document.createElement("div");
        item.className = "gedung-item"; 
        item.innerHTML = `
            <img src="${nodes[key].foto || 'https://via.placeholder.com/300x150?text=Foto+Gedung'}" 
                 class="gedung-foto" 
                 style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; margin-bottom: 10px;" 
                 alt="${nodes[key].name}">
            <h4 style="color: #1e293b; margin-bottom: 5px;">${nodes[key].name}</h4>
            <p style="font-size: 13px; color: #64748b; line-height: 1.4; margin-bottom: 12px;">
                ${nodes[key].deskripsi || 'Informasi detail gedung Universitas Bengkulu.'}
            </p>
            <button class="btn-lihat-peta" onclick="pilihGedung('${key}')">LIHAT DI PETA</button>
        `;
        listContainer.appendChild(item);
    }
}

function pilihGedung(key) {
    const node = nodes[key];
    map.setView([node.lat, node.lng], 18);
    L.popup()
        .setLatLng([node.lat, node.lng])
        .setContent(`<b>${node.name}</b>`)
        .openOn(map);
}

// ===============================
// Data Node Lokasi UNIB
// ===============================
const nodes = {
    A: { name: "Gerbang Masuk Utama UNIB", 
        lat: -3.76055224951084, lng: 102.27262918128972,
        deskripsi: "Pintu masuk utama menuju kawasan kampus terpadu Universitas Bengkulu.",
        foto: "https://www.unib.ac.id/wp-content/uploads/2024/01/9_11zon-1024x520.jpg"
    },
    B: { name: "Rektorat UNIB", 
        lat: -3.759478101861721, lng: 102.27238141255778,
        deskripsi: "Pintu masuk utama menuju kawasan kampus terpadu Universitas Bengkulu.",
        foto: "https://harianbengkuluekspress.bacakoran.co/upload/261ae6e84cf7a67281953e5f8e1dc066.jpg"
    },
    C: { name: "GB1", 
        lat: -3.7568501351387993, lng: 102.27379953500729,
        deskripsi: "Pintu masuk utama menuju kawasan kampus terpadu Universitas Bengkulu.",
        foto: "Foto/GB1.png"
    },
    D: { name: "GB2", 
        lat: -3.7579717536225976, lng: 102.2739093583443,
        deskripsi: "Pintu masuk utama menuju kawasan kampus terpadu Universitas Bengkulu.",
        foto: "Foto/GB2.png"
    },
    E: { name: "Gedung Serba Guna", 
        lat: -3.757643164455721, lng: 102.274000,
        deskripsi: "Pintu masuk utama menuju kawasan kampus terpadu Universitas Bengkulu.",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHDTavKwcr3y1zMWI7i66O1bsF_vhjpJkhSQ&s"
    },
    F: { name: "GB3 & GB4", 
        lat: -3.756275554223166, lng: 102.27654136683206,
        deskripsi: "Pintu masuk utama menuju kawasan kampus terpadu Universitas Bengkulu.",
        foto: "Foto/GB3.png"
    },
    G: { name: "GB5", 
        lat: -3.755556391076926, lng: 102.276431363572,
        deskripsi: "Pintu masuk utama menuju kawasan kampus terpadu Universitas Bengkulu.",
        foto: "Foto/GB5.png"
    },
    H: { name: "Perpustakaan UNIB", 
        lat: -3.7568580220896277, lng: 102.27483994833145,
        deskripsi: "Pintu masuk utama menuju kawasan kampus terpadu Universitas Bengkulu.",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJk0gEzd2MRipMOaATd6Dd_lisXxt5pd8yYA&s"
    },
    I: { name: "Dekanat FT UNIB", 
        lat: -3.758411726981416, lng: 102.27669262201825,
        deskripsi: "Pintu masuk utama menuju kawasan kampus terpadu Universitas Bengkulu.",
        foto: "https://www.unib.ac.id/wp-content/uploads/2021/11/FT.jpg"
    },
    J: { name: "Masjid Baitul Hikmah UNIB", 
        lat: -3.7589670616509885, lng: 102.27593738686693,
        deskripsi: "Pintu masuk utama menuju kawasan kampus terpadu Universitas Bengkulu.",
        foto: "https://www.unib.ac.id/wp-content/uploads/2025/02/1_11zon-79-1024x584.jpg"
    },
    K: { name: "Gerbang Masuk UNIB Belakang", 
        lat: -3.75954307166312, lng: 102.2751509041345,
        deskripsi: "Pintu masuk utama menuju kawasan kampus terpadu Universitas Bengkulu.",
        foto: "Foto/GerbangMasukBelakang.png"
    },
    L: { name: "Gerbang Keluar UNIB Belakang",
         lat: -3.759350366327174, lng: 102.27622379307287,
         deskripsi: "Pintu masuk utama menuju kawasan kampus terpadu Universitas Bengkulu.",
         foto: "Foto/GerbangKeluarBelakang.png"
    },
    M: { name: "FKIK UNIB",
         lat: -3.755099815561424, lng: 102.27797800806678,
         deskripsi: "Pintu masuk utama menuju kawasan kampus terpadu Universitas Bengkulu.",
         foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRuVj4Xhkm3XiSA2LqmBACy5CAu65upbffCg&s"
    },
    N: { name: "Gedung Layanan Terpadu",
         lat: -3.758070090856371, lng: 102.27193378819045,
         deskripsi: "Pintu masuk utama menuju kawasan kampus terpadu Universitas Bengkulu.",
         foto: "Foto/GLT.png"
    }
};

let startNode = null;
let endNode = null;
let routeLine = null;

for (let key in nodes) {
    let marker = L.marker([nodes[key].lat, nodes[key].lng])
        .addTo(map)
        .bindPopup(`<b>${nodes[key].name}</b>`);

    marker.on("click", function () {
        const inputStart = document.getElementById("inputStart");
        const inputEnd = document.getElementById("inputEnd");
        const clearStart = document.getElementById("clearStart");
        const clearEnd = document.getElementById("clearEnd");

        if (!startNode) {
            startNode = key;
            if (inputStart) inputStart.value = nodes[key].name;
            document.getElementById("startText").innerHTML = "<strong>Titik awal :</strong> " + nodes[key].name;
            if (clearStart) clearStart.style.display = "block";
        } else if (!endNode) {
            endNode = key;
            if (inputEnd) inputEnd.value = nodes[key].name;
            document.getElementById("endText").innerHTML = "<strong>Titik tujuan :</strong> " + nodes[key].name;
            if (clearEnd) clearEnd.style.display = "block";
            cariRute();
        }
    });
}

// ===============================
// Fungsi Cari Rute (Backend)
// ===============================
function cariRute() {
    if (!startNode || !endNode) {
        alert("Silakan pilih titik awal dan tujuan.");
        return;
    }

    const startLat = nodes[startNode].lat;
    const startLng = nodes[startNode].lng;
    const endLat = nodes[endNode].lat;
    const endLng = nodes[endNode].lng;
    const mode = document.getElementById("transportModeSelect").value;

    fetch("http://127.0.0.1:5000/route", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            startLat: startLat,
            startLng: startLng,
            endLat: endLat,
            endLng: endLng,
            mode: mode
        })
    })
    .then(response => {
        if (!response.ok) throw new Error("Server error " + response.status);
        return response.json();
    })
    .then(data => {
        if (!data.route || data.route.length === 0) {
            alert("Rute tidak ditemukan!");
            return;
        }

        if (routeLine) map.removeLayer(routeLine);

        routeLine = L.polyline(data.route, {
            color: "red",
            weight: 6
        }).addTo(map);

        map.fitBounds(routeLine.getBounds());

        document.getElementById("distanceText").innerHTML = "Jarak : " + data.distance + " meter";
        document.getElementById("timeText").innerHTML = "Estimasi waktu : " + data.time + " menit";

        startNode = null;
        endNode = null;
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Gagal mengambil rute dari backend.");
    });
}

document.getElementById("resetBtn").addEventListener("click", function () {
    startNode = null;
    endNode = null;

    const inputStart = document.getElementById("inputStart");
    const inputEnd = document.getElementById("inputEnd");
    const clearStart = document.getElementById("clearStart");
    const clearEnd = document.getElementById("clearEnd");
    const suggestStart = document.getElementById("suggestStart");
    const suggestEnd = document.getElementById("suggestEnd");
    
    if (inputStart) inputStart.value = "";
    if (inputEnd) inputEnd.value = "";
    if (clearStart) clearStart.style.display = "none";
    if (clearEnd) clearEnd.style.display = "none";
    if (suggestStart) suggestStart.style.display = "none";
    if (suggestEnd) suggestEnd.style.display = "none";

    document.getElementById("startText").innerHTML = "<strong>Titik awal :</strong> -";
    document.getElementById("endText").innerHTML = "<strong>Titik tujuan :</strong> -";
    document.getElementById("distanceText").innerHTML = "Jarak : -";
    document.getElementById("timeText").innerHTML = "Estimasi waktu : -";

    if (routeLine) {
        map.removeLayer(routeLine);
        routeLine = null;
    }
});

const inputStart = document.getElementById("inputStart");
const inputEnd = document.getElementById("inputEnd");
const suggestStart = document.getElementById("suggestStart");
const suggestEnd = document.getElementById("suggestEnd");

function buatSaran(inputElement, boxElement, jenis) {
    if (!inputElement || !boxElement) return;

    inputElement.addEventListener("input", function() {
        const keyword = this.value.toLowerCase();
        boxElement.innerHTML = "";
        
        if (!keyword) {
            boxElement.style.display = "none";
            return;
        }

        let cocok = false;
        for (let key in nodes) {
            if (nodes[key].name.toLowerCase().includes(keyword)) {
                cocok = true;
                const item = document.createElement("div");
                item.innerHTML = nodes[key].name;
                item.style.padding = "10px";
                item.style.cursor = "pointer";
                item.style.borderBottom = "1px solid #f1f5f9";
                
                item.onmouseenter = () => item.style.background = "#f1f5f9";
                item.onmouseleave = () => item.style.background = "white";

                item.onclick = function() {
                    inputElement.value = nodes[key].name;
                    boxElement.style.display = "none";
                    
                    const clearStart = document.getElementById("clearStart");
                    const clearEnd = document.getElementById("clearEnd");

                    if (jenis === "start") {
                        startNode = key;
                        document.getElementById("startText").innerHTML = "<strong>Titik awal :</strong> " + nodes[key].name;
                        if (clearStart) clearStart.style.display = "block";
                    } else {
                        endNode = key;
                        document.getElementById("endText").innerHTML = "<strong>Titik tujuan :</strong> " + nodes[key].name;
                        if (clearEnd) clearEnd.style.display = "block";
                    }

                    if (startNode && endNode) cariRute();
                };
                boxElement.appendChild(item);
            }
        }
        boxElement.style.display = cocok ? "block" : "none";
    });
}

buatSaran(inputStart, suggestStart, "start");
buatSaran(inputEnd, suggestEnd, "end");

document.addEventListener("click", function(e) {
    if (e.target !== inputStart && suggestStart) suggestStart.style.display = "none";
    if (e.target !== inputEnd && suggestEnd) suggestEnd.style.display = "none";
});