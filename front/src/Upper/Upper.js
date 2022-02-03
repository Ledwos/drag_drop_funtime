import React from "react";
import DraggableMarker from "../Marker/DraggableMarker";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../items";

const Upper = ({ markerJson, setMarkerJson }) => {
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
        <DraggableMarker coord={marker} key={idx} id={marker.id} />
      ))}
    </div>
  );
};

export default Upper;
