import React, { Children, useCallback, useState } from 'react';
import Card from '../Card/Card';
import CardRow from '../CardRow/CardRow';
import "./style.css";
import 'normalize.css';


export default function Chart({padding, cards, moveItem, rows}) {
    const mapRows = (cards, layout, mapper) => {
        const out = [];
        let cardIndex = 0;
        for (let i = 0; i < layout.length; i++) {
            const rowInfo = layout[i];
            const rowSize = rowInfo.len;

            const slice = cards.slice(cardIndex, cardIndex + rowSize);
            out.push(mapper(slice, rowInfo, i, cardIndex));

            cardIndex += rowSize;
        }

        return out;
    };

    const maptest = (array, mapper) => {
        const out = [];
        // wrap mapper output with row, fix index incrementation
        for (let i = 0; i < array.length; i++) {
            out.push(
                <div>{mapper(array[i], i)}</div>
            );
        }
        return out;
    }

    return (
        <div className="chart" style={{width: `${750 + (padding * 20)}`}}>
            {/* {mapRows(cards, rows, (slice, rowInfo, i) => (
                <CardRow key={"row-" + i} size={rowInfo.size}>
                    {slice.map((card) => (
                        <Card key={card.id} id={card.id} src={card.src} onMove={moveItem} padding={padding}></Card>
                    ))}
                </CardRow>
            ))} */}
            {maptest(cards, (card) => (
                <Card key={card.id} id={card.id} src={card.src} onMove={moveItem} padding={padding}></Card>
            ))}
        </div>
    );
}
