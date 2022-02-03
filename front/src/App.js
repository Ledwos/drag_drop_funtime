import Upper from "./Upper/Upper";
import Lower from "./Lower/Lower";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
// import CustomDragLayer from "./Upper/CustomDragLayer";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <h2>Drag n Drop fun time</h2>
        {/* <CustomDragLayer /> */}
        <Upper />
        <Lower />
      </div>
    </DndProvider>
  );
}

export default App;
