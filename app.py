from flask import Flask, request, jsonify
from flask_cors import CORS
import osmnx as ox
import networkx as nx

app = Flask(__name__)
CORS(app)

print("Mengambil graph jalan UNIB (Semua Jenis Jalur)...")

# Koordinat tengah Universitas Bengkulu
center_point = (-3.757, 102.272)

graph = ox.graph_from_point(
    center_point,
    dist=2000,
    network_type="all"
)

graph = ox.truncate.largest_component(graph)
print("Graph jalan UNIB berhasil dimuat.")

# =========================================================
# HOMEPAGE
# =========================================================
@app.route('/')
def home():
    return "Backend Shortest Path UNIB Multi-Moda Berjalan"

# =========================================================
# API SHORTEST PATH
# =========================================================
@app.route('/route', methods=['POST'])
def route():
    try:
        if not request.is_json:
            return jsonify({"error": "Request harus JSON"}), 400

        data = request.get_json()
        print("DATA MASUK:", data)

        start_lat = float(data['startLat'])
        start_lng = float(data['startLng'])
        end_lat = float(data['endLat'])
        end_lng = float(data['endLng'])
        
        mode = data.get('mode', 'walk')

        if mode == "car":
            speed_kmh = 25
        elif mode == "bike":
            speed_kmh = 15
        else:
            speed_kmh = 5  # walk

        origin_node = ox.distance.nearest_nodes(graph, start_lng, start_lat)
        destination_node = ox.distance.nearest_nodes(graph, end_lng, end_lat)

        # Algoritma Dijkstra
        shortest_route = nx.shortest_path(
            graph,
            origin_node,
            destination_node,
            weight='length'
        )

        route_coords = [
            [graph.nodes[node]['y'], graph.nodes[node]['x']]
            for node in shortest_route
        ]

        total_distance = sum(
            graph[u][v][0]['length']
            for u, v in zip(shortest_route[:-1], shortest_route[1:])
        )

        waktu_menit = ((total_distance / 1000) / speed_kmh) * 60

        return jsonify({
            "route": route_coords,
            "distance": round(total_distance, 2),
            "time": round(waktu_menit, 2)
        })

    except Exception as e:
        print(f"Error terjadi: {str(e)}") 
        return jsonify({"error": str(e)}), 500

# =========================================================
# RUN SERVER
# =========================================================
if __name__ == '__main__':
    app.run(debug=True)