import React from "react";
import "leaflet/dist/leaflet.css";
import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";
import { useEffect, useState } from "react";
// Locations on the map
const locations = [
  {
    latitude: 16.0,
    longitude: 80.0,
    popUp: "Andhra Pradesh",
    isLiveTraffic: true,
  },
  {
    latitude: 28.0,
    longitude: 95.0,
    popUp: "Arunachal Pradesh",
    isLiveTraffic: false,
  },
  {
    latitude: 26.2006043,
    longitude: 92.9375739,
    popUp: "Asam",
    isLiveTraffic: false,
  },
  {
    latitude: 25.11,
    longitude: 85.32,
    popUp: "Bihar",
    isLiveTraffic: false,
  },
  {
    latitude: 21.3,
    longitude: 82.0,
    popUp: "Chhattisgarh",
    isLiveTraffic: true,
  },
  {
    latitude: 28.38,
    longitude: 72.12,
    popUp: "Goa",
    isLiveTraffic: false,
  },
  {
    latitude: 23.0,
    longitude: 72.0,
    popUp: "Gujarat",
    isLiveTraffic: true,
  },
  {
    latitude: 30.3,
    longitude: 74.6,
    popUp: "Haryana",
    isLiveTraffic: false,
  },
  {
    latitude: 25.3,
    longitude: 91.0,
    popUp: "Meghalaya",
    isLiveTraffic: false,
  },
  {
    latitude: 26.0,
    longitude: 94.2,
    popUp: "Orissa",
    isLiveTraffic: false,
  },
  {
    latitude: 30.4,
    longitude: 75.5,
    popUp: "Punjab",
    isLiveTraffic: false,
  },
  {
    latitude: 27.0,
    longitude: 74.0,
    popUp: "Rajasthan",
    isLiveTraffic: false,
  },
  {
    latitude: 20,
    longitude: 76,
    popUp: "Maharashtra",
    isLiveTraffic: false,
  },
];

const traffic = locations.reduce(
  (acc, curr) => {
    return curr.isLiveTraffic
      ? { ...acc, liveTraffic: [...acc.liveTraffic, curr] }
      : { ...acc, offline: [...acc.offline, curr] };
  },
  { liveTraffic: [], offline: [] }
);

export const Map = () => {
  const [liveTraffic, setLiveTraffic] = useState(traffic.liveTraffic);

  // To blink the traffic locations
  useEffect(() => {
    const intervalId = setInterval(() => {
      setLiveTraffic((prev) => (prev.length > 0 ? [] : traffic.liveTraffic));
    }, 1000);

    return () => clearTimeout(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [traffic.liveTraffic]);

  return (
    <div className="marker-container">
      <MapContainer center={[20, 78]} zoom={5}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <MarkerGroupCluster> */}
        {[...traffic.offline, ...liveTraffic].map((location, i) => (
          <CircleMarker
            key={i}
            center={[location.latitude, location.longitude]}
            radius={8}
            color="blue"
          >
            <Popup>{location.popUp}</Popup>
          </CircleMarker>
        ))}
        {/* </MarkerGroupCluster> */}
      </MapContainer>
    </div>
  );
};
