import { render } from '@testing-library/react';
import React, { Component } from 'react';



class IMCClasse extends Component {
    constructor(props) {
        super(props);
        this.CalcularIMC(this.props.peso, this.props.altura)
    }

    CalcularIMC = (peso, altura) =>{
        const IMC = peso/(altura*altura);
        let categoria; 
        if(IMC < 18.5){
            categoria = 'A baixo do peso'
        } 
        else if(IMC >= 18.5 && IMC <= 24.9){
            categoria = 'Normal';
        }
        else if(IMC >= 25 && IMC <= 29.9){
            categoria = 'Sobrepeso';
        }
        else if(IMC >= 30 && IMC < 40){
            categoria = 'Obesidade';
        }
        else if(IMC >= 40){
            categoria = 'Obesidade Grave';
        }
        else categoria = 'Valor Inválido';    
        

        return {IMC, categoria}
    }

    render(){
        const {altura, peso} = this.props
        const {IMC, categoria} = this.CalcularIMC(peso, altura)
        return (
            <div>
                <h3> Cálculo do IMC :) </h3>
                <h3> A minha altura é {altura} 
                 &nbsp; e o meu peso é {peso} </h3>
                <h3> O meu IMC é: {IMC} </h3>
                <h3> Categoria: {categoria}</h3>
            </div>
        )
    }
}

export default IMCClasse;