import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../items';

const Lower = () => {
    const [markers, setMarkers] = useState([])
    const [{isOver}, drop] = useDrop({ 
        //  ^ anything in object here comes from collect object
        accept: ItemTypes.MARKER,
        drop: (item, monitor) => updatePosition(item),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    })
    const updatePosition = (item) => {
        const newMarkers = [...markers, item.id]
        setMarkers(newMarkers)
        document.querySelector(`#${item.id}`).remove()
        console.log(newMarkers)
    }
    return (
        <div id="lower"
            ref={drop}
            style={{
                backgroundColor: isOver ? "green": null
            }}
        >
            drop here :)
            {markers.length > 0 && markers.map(x => (
                <div key={x}>{x}</div>
            ))}
        </div>
    );
};

export default Lower;