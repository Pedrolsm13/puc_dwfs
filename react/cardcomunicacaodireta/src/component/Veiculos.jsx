import React from "react";
import "./card.css"

export default function Veiculos(props){
    return(
        <div className="Card">
            <div className="Title">
                <h3>
                    {props.titulo}
                </h3>
            </div>
            <div className="Content">
                Motor à {props.motor}
            </div>
            <div className="Children">
                {props.children}
            </div>
        </div>
    )
}