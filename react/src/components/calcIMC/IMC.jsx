import React from 'react';

const IMC = props => {
    function calcularIMC(peso, altura){
        return peso/(altura*altura);
    }
    
    return (
        <div>
            <h3> A minha altura é {props.altura} 
             e o meu peso é {props.peso} </h3>
            <h3>
                O meu IMC é...{calcularIMC (props.peso, props.altura)}
            </h3>
        </div>
    )
}

export default IMC;