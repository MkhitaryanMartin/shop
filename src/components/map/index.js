import React from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

import "./style.css";

const Map = ({points, onClick}) => (
    
  <div className="map">
    <ComposableMap>
      <Geographies geography="/features.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      {points.map((point, index) => (
        <Marker key={index} coordinates={[point.longitude, point.latitude]} onClick={()=>onClick(index)}>
          <circle r={4} fill="#F00" />
        </Marker>
      ))}
    </ComposableMap>
  </div>
);

export default Map;
