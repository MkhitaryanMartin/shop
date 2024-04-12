import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import mapImg from "../../assets/img/mapImg.png";
import count from "../../assets/img/count.png"
import "./style.css";

const CustomMarker = ({ isSelected, onClick }) => (
  <g>
    <circle r={isSelected ? 6 : 4}   fill={isSelected ? "#0F0" : "transparent"} onClick={onClick} stroke="#0F0"/>
  </g>
);

const Map = ({ points, onClick }) => {
  const [selectedPointIndex, setSelectedPointIndex] = useState(undefined);

  const handleMarkerClick = (e,index) => {
    e.stopPropagation()
    setSelectedPointIndex(index);
    onClick(index);
  };

  return (
    <div className="map"  onClick={(e)=>{handleMarkerClick(e,undefined)
    }}>
       {selectedPointIndex !== undefined && <img src={count} className="count-img" alt=""/>}
      <ComposableMap style={{minWidth:"100%"}}>
        <Geographies geography="/features.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        {points.map((point, index) => (
          <Marker key={index} coordinates={[point.longitude, point.latitude]} onClick={(e) => handleMarkerClick(e,index)} className={selectedPointIndex === index ? "map__marker":""}>
            <CustomMarker isSelected={selectedPointIndex === index} />
            {selectedPointIndex === index && <image href={mapImg} x={-60} y={-110} width={120} height={120} />}
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default Map;
