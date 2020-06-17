import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="card-contato">
            <p>{props.email}</p>
            <p>{props.endereco}</p>
        </div>
    )

}

export default CardPequeno; 