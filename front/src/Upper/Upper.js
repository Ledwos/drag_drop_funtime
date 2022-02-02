import React, { useState } from 'react';
import Marker from '../Marker'
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../items';

const Upper = () => {
    const [markerJson, setMarkerJson] = useState({
        x: 10, y: 10
    })
    const [, drop] = useDrop({ 
        accept: ItemTypes.MARKER,
        drop: (item, monitor) => {
            const delta = monitor.getDifferenceFromInitialOffset();
            // console.log(delta.x, delta.y)
            const newMarkerJson = {
                x: delta.x + markerJson.x,
                y: delta.y + markerJson.y
            }
            console.log(newMarkerJson.x, newMarkerJson.y)
            setMarkerJson(newMarkerJson)
        },
    })
    return (
        <div id="upper"
        ref={drop}
        >
            markers start here
            <Marker coord={markerJson}/>
        </div>
    );
};

export default Upper;