import React, { Children, useCallback, useState } from 'react';
import Card from '../Card/Card';
import CardRow from '../CardRow/CardRow';
import "./style.css";
import 'normalize.css';


export const CARDS = (() => {
    const cards = [];
    for (let i = 0; i < 144; i++) {
        cards.push({id: "card-"+i, name: "", src: ""});
    }
    return cards;
})();


export default function Chart(props) {
    
    // todo: fix performance by creating list of card elements only once
    const renderRows = (cards) => {
        const rows = [];
        let i = 0;
        // this should not be needed, but this is safer
        while (i < cards.length) {
            for (let j = 0; j < props.rows.length; j++) {
                const row = props.rows[j];
                const rowElements = [];
                for (let k = 0; k < row.len; k++) {
                    const card = cards[i];
                    const padding = 
                        `${row.pad_mult[0] * props.padding}px ${row.pad_mult[1] * props.padding}px 
                        ${row.pad_mult[2] * props.padding}px ${row.pad_mult[3] * props.padding}px`;
                    rowElements.push(<Card key={card.id} index={i} padding={padding} src={card.src} moveCard={props.moveCard}></Card>);

                    // fix alignment with zero space element
                    if (k < row.len) {
                        rowElements.push(<span key={"zspace-"+k} className="zero-space"> </span>);
                    }
                    i++
                }
                rows.push(<CardRow key={"row-"+j} size={row.size}>{rowElements}</CardRow>) 
            }
            return rows;
        }
    }

    //let rows = renderRows(props.cards);
    return (
        <div className="chart" style={{width: `${750 + (props.padding * 20)}`}}>
        {props.cards.map((card, i) => {
            return <Card key={card.id} padding={props.padding} index={i} src={card.src} moveCard={props.moveCard}>{card.id}</Card>
        })}
        </div>
    );
}
