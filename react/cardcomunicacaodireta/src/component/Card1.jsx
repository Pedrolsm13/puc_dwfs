import React from "react";
import "./Card.css"

export default function Card1(props){
    return(
        <div className="Card">
        <div>
            <h3 className="Title">Passagem de parâmetros via props</h3>
        </div>
        <div className="Title">
            {props.titulo}
        </div>
        <div className="Content">
            {props.texto}
        </div>
        </div>
    )
}