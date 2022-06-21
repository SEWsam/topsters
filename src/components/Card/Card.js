import React, { useRef, memo } from "react";
import "./style.css"
import { useDrag, useDrop} from 'react-dnd'
import 'normalize.css';

const Card = memo(({id, onMove, padding, src}) => { 
    // useDrag - the list item is draggable
    const [{ isDragging }, dragRef] = useDrag({
        type: 'item',
        item: { id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });


    // useDrop - the list item is also a drop area
    const [, dropRef] = useDrop({
        accept: 'item',
        hover: (hoverTarget) => {
            if (hoverTarget.id !== id) {
                onMove(hoverTarget.id, id);
            }
        }
    });

    // join drag & drop refs
    const ref = useRef(null);
    dragRef(ref);
    dropRef(ref);

    // Make items being dragged transparent, so it's easier to see where we drop them
    const opacity = isDragging ? 0 : 1;

    return (
        <div ref={ref} className="card" style={{padding, opacity}}>
            <div className="inner" style={{backgroundImage: `url(${src})`}}>
            </div>
        </div>
    );
});


export default Card;