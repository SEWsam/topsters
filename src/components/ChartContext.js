import React, { useState, createContext } from "react";
import sample from "../sample";

function move(array, fromIndex, toIndex) {
    if (toIndex >= array.length) {
        toIndex = array.length - 1;
    }
    array.splice(toIndex, 0, array.splice(fromIndex, 1)[0]);
    return array;
}

function moveElement(array, index, offset) {
    const toIndex = index + offset;

    return move(array, index, toIndex);
}


const ChartContext = createContext({items: []});

export function ChartProvider({children}) {

    const setItems = (items) => setState( (state) => ({...state, items}));

    const moveItem = (sourceId, dest) => {
        const sourceIndex = state.items.findIndex(
            item => item.id === sourceId
        );
        const destIndex = state.items.findIndex(
            item => item.id === dest
        );
      
        // If source/destination is unknown, do nothing.
        if (sourceId === -1 || dest === -1) {
            return;
        }
      
        const offset = destIndex - sourceIndex;
      
        setState((state) => ({
            ...state,
            items: moveElement(state.items, sourceIndex, offset)
        }));
    }

    const [state, setState] = useState({
        items: sample,
        moveItem: moveItem, 
        setItems: setItems
    });

    return (
        <ChartContext.Provider value={state}>
            {children}
        </ChartContext.Provider>
    );
}

export default ChartContext;