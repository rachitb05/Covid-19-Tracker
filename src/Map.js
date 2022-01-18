import React from "react";
import { MapContainer as LeafletMap, TileLayer,useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import {showDataOnMap} from "./util"
function ChangeMapView({ center,zoom }) {
    const map = useMap();
    map.setView(center, zoom);
  
    return null;
  }
  
function Map({countries,casesType,center,zoom}) {
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <ChangeMapView center={center} zoom={zoom}/>
        {/* loop through all countries then print circles */}
       { showDataOnMap(countries,casesType)}
      </LeafletMap>
    </div>
  );
}

export default Map;
