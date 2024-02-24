import { Icon } from "leaflet";
import "./App.css";
import "leaflet/dist/leaflet.css";
import {
  CircleMarker,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import MarkerGroupCluster from "react-leaflet-cluster";
import { useEffect, useState } from "react";
// Markers on the map
const markers = [
  {
    latitude: 48.86,
    longitude: 2.3522,
    popUp: "Hello, I am pop up 1",
    isLiveTraffic: false,
  },
  {
    latitude: 48.85,
    longitude: 2.3522,
    popUp: "Hello, I am pop up 2",
    isLiveTraffic: true,
  },
  {
    latitude: 48.855,
    longitude: 2.34,
    popUp: "Hello, I am pop up 3",
    isLiveTraffic: false,
  },
  {
    latitude: 48.866,
    longitude: 2.3622,
    popUp: "Hello, I am pop up 3",
    isLiveTraffic: true,
  },
  // ---
  {
    latitude: 48.846,
    longitude: 2.342,
    popUp: "Hello, I am pop up 3",
    isLiveTraffic: false,
  },
  {
    latitude: 48.861,
    longitude: 2.332,
    popUp: "Hello, I am pop up 3",
    isLiveTraffic: true,
  },
  {
    latitude: 48.836,
    longitude: 2.372,
    popUp: "Hello, I am pop up 3",
    isLiveTraffic: false,
  },
  {
    latitude: 48.871,
    longitude: 2.367,
    popUp: "Hello, I am pop up 3",
    isLiveTraffic: true,
  },
  {
    latitude: 48.841,
    longitude: 2.337,
    popUp: "Hello, I am pop up 3",
    isLiveTraffic: false,
  },
  {
    latitude: 48.881,
    longitude: 2.332,
    popUp: "Hello, I am pop up 3",
    isLiveTraffic: true,
  },
  {
    latitude: 48.846,
    longitude: 2.377,
    popUp: "Hello, I am pop up 3",
    isLiveTraffic: false,
  },
  {
    latitude: 48.876,
    longitude: 2.341,
    popUp: "Hello, I am pop up 3",
    isLiveTraffic: true,
  },
  {
    latitude: 48.841,
    longitude: 2.362,
    popUp: "Hello, I am pop up 3",
    isLiveTraffic: false,
  },
];

// Creating icon for custom marker
const cusotomMarker = new Icon({
  iconUrl: require("./assets/marker-icon.png"),
  iconSize: [38, 38],
});

const traffic = markers.reduce(
  (acc, curr) => {
    return curr.isLiveTraffic
      ? { ...acc, liveTraffic: [...acc.liveTraffic, curr] }
      : { ...acc, offline: [...acc.offline, curr] };
  },
  { liveTraffic: [], offline: [] }
);

function App() {
  const [liveTraffic, setLiveTraffic] = useState(traffic.liveTraffic);
  const [offline, setOffline] = useState(traffic.offline);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLiveTraffic((prev) => (prev.length > 0 ? [] : traffic.liveTraffic));
    }, 1000);

    return () => clearTimeout(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [traffic.liveTraffic]);

  return (
    <div className="marker-container">
      <MapContainer center={[48.8566, 2.3522]} zoom={14}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerGroupCluster>
          {[...offline, ...liveTraffic].map((location, i) => (
            <CircleMarker
              key={i}
              center={[location.latitude, location.longitude]}
              radius={8}
              color="blue"
            >
              <Popup>{location.popUp}</Popup>
            </CircleMarker>
          ))}
        </MarkerGroupCluster>
      </MapContainer>
    </div>
  );
}

export default App;

// MarkerContainer - Container for the map
// TileLayer - Skin of the map.
// MarkerGroupCluster - Group for markers
// Marker - Marker visible on the map
// PopUp - Popup for the each marker
