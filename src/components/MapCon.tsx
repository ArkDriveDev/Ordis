 import { 
    MapContainer,
    TileLayer,
    Marker,
    Popup
  } from 'react-leaflet';
  import "leaflet/dist/leaflet.css"
  const MapCon: React.FC = () => {
return(
<MapContainer
          style={{ height: "100vh" }}
          center={[8.359850, 124.869077]}
          zoom={50}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[8.3596696, 124.8691893]}>
          <Popup>
           <br /> IT Lab.
          </Popup>
      </Marker>
</MapContainer>
);
};
 export default MapCon;