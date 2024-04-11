import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import mapImg from "../../assets/img/mapImg.png";
import "./style.css";

const CustomMarker = ({ isSelected, onClick }) => (
  <g>
    <circle r={isSelected ? 6 : 4} fill={isSelected ? "#0F0" : "#F00"} onClick={onClick} />
  </g>
);

const Map = ({ points, onClick }) => {
  const [selectedPointIndex, setSelectedPointIndex] = useState(null);

  const handleMarkerClick = (index) => {
    setSelectedPointIndex(index);
    onClick(index);
  };

  return (
    <div className="map" style={{minWidth:"600px"}}>
      <ComposableMap>
        <Geographies geography="/features.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        {points.map((point, index) => (
          <Marker key={index} coordinates={[point.longitude, point.latitude]} onClick={() => handleMarkerClick(index)}>
            <CustomMarker isSelected={selectedPointIndex === index} />
            {selectedPointIndex === index && <image href={mapImg} x={-60} y={-110} width={120} height={120} />}
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default Map;
