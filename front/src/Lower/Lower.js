import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../items";
import DraggableMarker from "../Marker/DraggableMarker";

const Lower = ({
  markerJson,
  setMarkerJson,
  markerJsonUpper,
  setMarkerJsonUpper,
}) => {
  const [{ isOver }, drop] = useDrop({
    //  ^ anything in object here comes from collect object
    accept: ItemTypes.MARKER,
    drop: (item, monitor) => updatePosition(item, monitor),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  const updatePosition = (item, monitor) => {
    if (markerJson.find((x) => x.id === item.id)) {
      // update position
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
    } else {
      // add marker
      // const markerIdx = markerJsonUpper.findIndex((x) => x.id === item.id);
      setMarkerJsonUpper(markerJsonUpper.filter((x) => x.id !== item.id));
      const newMarkers = [...markerJson, item];
      setMarkerJson(newMarkers);
      console.log(newMarkers);
    }
  };
  return (
    <div
      id="lower"
      ref={drop}
      style={{
        backgroundColor: isOver ? "green" : null,
      }}
    >
      drop here :)
      {markerJson.map((marker, idx) => (
        <DraggableMarker coord={marker} key={idx} id={marker.id} />
      ))}
    </div>
  );
};

export default Lower;
