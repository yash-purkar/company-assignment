import "./App.css";
import "leaflet/dist/leaflet.css";
import { Map } from "./components/map/Map";
import { useState } from "react";

function App() {
  const [currentTab, setCurrentTab] = useState("map");

  return (
    <div>
      <div className="tabs-container">
        <buton onClick={() => setCurrentTab("map")} className={`tab-button ${currentTab === "map" && "active-tab"}`}>Map</buton>
        <buton onClick={() => setCurrentTab("sales")} className={`tab-button ${currentTab === "sales" && "active-tab"}`}>Sales</buton>
      </div>
      <Map />
    </div>
  );
}

export default App;

// MarkerContainer - Container for the map
// TileLayer - Skin of the map.
// MarkerGroupCluster - Group for markers
// Marker - Marker visible on the map
// PopUp - Popup for the each marker
