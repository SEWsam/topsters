import React, { useState } from 'react';
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
    const renderCards = () => {
        const cardSlice = props.cards.slice(0, props.size);
        const ret = cardSlice.map((cards, index) => {
            return (<Card key={cards.id} index={index} padding={props.padding} src={cards.src}></Card>);
        });
        return ret;
    };
    
    // todo: this is bug prone: doesn't take into account length of cards array
    const renderRows = (cards) => {
        const rows = [];
        let i = 0;
        for (let j = 0; j < props.rows.length; j++) {
            const row = props.rows[j];
            const rowElements = [];
            for (let k = 0; k < row.len; k++) {
                rowElements.push(cards[i]);

                // fix alignment with zero space element
                if (k < row.len) {
                    rowElements.push(<span className="zero-space"> </span>);
                }
                i++
            }
            rows.push(<CardRow size={row.size}>{rowElements}</CardRow>) 
        }
        return rows;
    }
    return (
        <div className="chart" style={{width: `${750 + (props.padding * 20)}`}}>
        {renderRows(renderCards())}
        </div>
    );
}
