import React, { createContext } from "react";
import { ItemTypes } from "./items";
import { useDrag } from "react-dnd";

export const markerContext = createContext({
  markerUpper: true,
});

const Marker = ({ coord }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.MARKER,
    item: coord,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  const markerUpper = () => {};
  return (
    <markerContext.Provider value={markerUpper}>
      <div
        ref={drag}
        style={{
          borderRadius: "50%",
          backgroundColor: "teal",
          width: "30px",
          height: "30px",
          textAlign: "center",
          color: "white",
          position: "absolute",
          opacity: isDragging ? "0" : "1",
          left: `${coord.x}px`,
          top: `${coord.y}px`,
        }}
        class="marker"
      >
        :D
      </div>
    </markerContext.Provider>
  );
};

export default Marker;
