import React, { useState } from "react";
import Upper from "./Upper/Upper";
import Lower from "./Lower/Lower";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
// import CustomDragLayer from "./Upper/CustomDragLayer";

function App() {
  const [markersLower, setMarkersLower] = useState([]);
  const [markersUpper, setMarkersUpper] = useState([
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
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <h2>Drag n Drop fun time</h2>
        {/* <CustomDragLayer /> */}
        <Upper markerJson={markersUpper} setMarkerJson={setMarkersUpper} />
        <Lower
          markerJson={markersLower}
          setMarkerJson={setMarkersLower}
          setMarkerJsonUpper={setMarkersUpper}
          markerJsonUpper={markersUpper}
        />
      </div>
    </DndProvider>
  );
}

export default App;
