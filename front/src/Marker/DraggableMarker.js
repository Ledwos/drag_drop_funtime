import React from "react";
import { ItemTypes } from "../items";
import { useDrag } from "react-dnd";
import Marker from "./Marker";

const DraggableMarker = ({ coord }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.MARKER,
    item: coord,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  return (
    <div
      ref={drag}
      style={{
        position: "absolute",
        opacity: isDragging ? "0" : "1",
        left: `${coord.x}px`,
        top: `${coord.y}px`,
      }}
    >
      <Marker coord={coord} />
    </div>
  );
};

export default DraggableMarker;
