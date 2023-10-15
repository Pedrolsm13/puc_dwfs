import React from "react";

export default function StatusAluno(props){
    const status = props.nota >= 6 ? "Aprovado" : "reprovado";
    return(
        <div>
            <p>Minha nota na disciplina é {props.nota}</p>
            <p>Estou {status}!</p>
        </div>
    )
}