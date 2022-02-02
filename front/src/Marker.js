import React, { createContext } from 'react';
import { ItemTypes } from './items';
import { useDrag } from 'react-dnd'

export const markerContext = createContext({
    markerUpper: true
})

const Marker = ({coord}) => {
    const [{isDragging}, drag] = useDrag({
        type: ItemTypes.MARKER,
        item: {
            id: "test",
            test: "test"
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        }),
    });
    const markerUpper = () => {
        
    }
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
                opacity: (isDragging ? "0" : "1"),
                position: 'absolute',
                left: `${coord.x}px`,
                top: `${coord.y}px`,
            }}
            id="test"
            >
                :D
            </div>
        </markerContext.Provider>
    );
};

export default Marker;