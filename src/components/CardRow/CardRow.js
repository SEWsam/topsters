import React from "react";
import "./style.css"
import 'normalize.css';


export default function CardRow({children, size}) {
    // todo: add alignment options
    return (
        <div className={"card-row align-justify size-"+size}>
            {children}
        </div>
    );
}