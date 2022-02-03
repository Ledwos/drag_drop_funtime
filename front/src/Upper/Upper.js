import React, { useState } from "react";
// import Marker from "../Marker/Marker";
import DraggableMarker from "../Marker/DraggableMarker";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../items";

const Upper = () => {
  const [markerJson, setMarkerJson] = useState([
    {
      id: "m1",
      x: 300,
      y: 50,
    },
    {
      id: "m2",
      x: 213,
      y: 10,
    },
    {
      id: "m3",
      x: 580,
      y: 150,
    },
  ]);
  const [, drop] = useDrop({
    accept: ItemTypes.MARKER,
    drop: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      const newJson = {
        id: item.id,
        x: delta.x + item.x,
        y: delta.y + item.y,
      };
      const newMarkerJson = [...markerJson];
      const markerIdx = newMarkerJson.findIndex((x) => x.id === item.id);
      newMarkerJson[markerIdx] = newJson;
      setMarkerJson(newMarkerJson);
    },
  });
  return (
    <div id="upper" ref={drop}>
      markers start here
      {markerJson.map((marker, idx) => (
        <DraggableMarker coord={marker} key={idx} />
      ))}
    </div>
  );
};

export default Upper;
