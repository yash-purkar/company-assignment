import React from "react";
import "leaflet/dist/leaflet.css";
import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";
import { useEffect, useState } from "react";
import { useGetTrafficData } from "./hooks/useGetTrafficData";

export const Map = () => {
  const locations = useGetTrafficData();

  // To get liveTraffic data
  const traffic = locations.reduce(
    (acc, curr) => {
      return curr.isLiveTraffic
        ? { ...acc, liveTraffic: [...acc.liveTraffic, curr] }
        : { ...acc, offline: [...acc.offline, curr] };
    },
    { liveTraffic: [], offline: [] }
  );
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
      </MapContainer>
    <div className="customer-density-text">
      <span></span>
      <p>Customer density</p>
    </div>
    </div>
  );
};
