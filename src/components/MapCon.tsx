import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet"; // Import Leaflet
import "leaflet/dist/leaflet.css";
import pins from "./Pins.json"; // Import JSON directly

// Import your custom marker image
import customMarkerIcon from "./images/blue.png"; // Adjust the path as needed

interface MarkerData {
  roomID: number;
  latitude: number;
  longitude: number;
  classroom: string;
}


const customIcon = L.icon({
  iconUrl: customMarkerIcon,
  iconSize: [30, 30], 
});

const MapCon: React.FC = () => {
  const [markers] = useState<MarkerData[]>(pins); // Use imported data

  return (
    <MapContainer style={{ height: "100vh" }} center={[8.35985, 124.869077]} zoom={18}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker) => (
        <Marker
          key={marker.roomID}
          position={[marker.latitude, marker.longitude]}
          icon={customIcon}
        >
          <Popup>{marker.classroom}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapCon;