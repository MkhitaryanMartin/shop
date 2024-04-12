import React from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import mapImg from "../../assets/img/mapImg.png";
import "./style.css";
import Scroller from "../scroller";

const CustomMarker = ({ isSelected, onClick }) => (
  <g>
    <circle r={isSelected ? "10px": "5px"}   fill={isSelected ? "#0F0" : "transparent"} onClick={onClick} stroke="#0F0"/>
  </g>
);

const Map = ({ points, onClick, selectedPointIndex }) => {


  const handleMarkerClick = (e,index) => {
    e.stopPropagation()
    onClick(index);
    console.log(index)
  };

  return (
    <Scroller className="map"  onClick={(e)=>{handleMarkerClick(e,undefined)
    }}>
    <div className="map__container">
      <ComposableMap >
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
            {selectedPointIndex === index && <image href={mapImg} x={-60} y={-120} width={120} height={120} />}
          </Marker>
        ))}
      </ComposableMap>
    </div>
    </Scroller>
  );
};

export default Map;


