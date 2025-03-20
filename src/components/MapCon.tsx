import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import pins from "./Pins.json"; 


import defaultMarkerIcon from "./images/blue.png"; 
import activeMarkerIcon from "./images/green.png"; 

interface MarkerData {
  roomID: number;
  latitude: number;
  longitude: number;
  classroom: string;
}

const defaultIcon = L.icon({
  iconUrl: defaultMarkerIcon,
  iconSize: [50, 50],
});

const activeIcon = L.icon({
  iconUrl: activeMarkerIcon,
  iconSize: [50, 50],
});

const MapCon: React.FC = () => {
  const [markers] = useState<MarkerData[]>(pins); 
  const [activeMarkerId, setActiveMarkerId] = useState<number | null>(null); 

  const handleMarkerClick = (markerId: number) => {
    setActiveMarkerId(markerId); 
  };

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
          icon={activeMarkerId === marker.roomID ? activeIcon : defaultIcon} 
          eventHandlers={{
            click: () => handleMarkerClick(marker.roomID), 
          }}
        >
          <Popup>{marker.classroom}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapCon;