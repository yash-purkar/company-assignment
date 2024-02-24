import { Icon } from "leaflet";
import "./App.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MarkerGroupCluster from "react-leaflet-cluster";
// Markers on the map
const markers = [
  {
    geocode: [48.86, 2.3522],
    popUp: "Hello, I am pop up 1",
  },
  {
    geocode: [48.85, 2.3522],
    popUp: "Hello, I am pop up 2",
  },
  {
    geocode: [48.855, 2.34],
    popUp: "Hello, I am pop up 3",
  },
];

// Creating icon for custom marker
const cusotomMarker = new Icon({
  iconUrl: require("./assets/marker-icon.png"),
  iconSize: [38, 38],
});

function App() {
  return (
    <MapContainer center={[48.8566, 2.3522]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerGroupCluster>
        {markers.map((marker, i) => (
          <Marker key={i} position={marker.geocode} icon={cusotomMarker}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MarkerGroupCluster>
    </MapContainer>
  );
}

export default App;
