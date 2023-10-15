import React from "react";

function IdentificacaoComParametro(props){
    return(
        <div>
            <p>Meu nome é {props.nome}</p>
            <p>Meu sobrenome é {props.sobrenome}</p>
            <p>Tenho {props.idade} anos</p>
        </div>
    )
}
export default IdentificacaoComParametro;