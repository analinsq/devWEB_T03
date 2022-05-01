import { Component } from "react";
import Casa from "./Casa";

class Personagem extends Component{
    render (){
        const {nome, casa, horario} = this.props;
        return(
                <div> 
                   <h2> Personagem {nome} da casa {casa} no {horario} </h2> 
                </div>
            )
    }
}

//EXEMPLO EM UMA FUNÇÃO ARROW

// const Personagem = () => 
//     const {nome, casa} = props
        // <div> 
            //<h2>Personagem {nome} da casa {casa}</h2>
        // </div>

export default Personagem;