import React, {Component} from "react";

class Hero extends Component {
    render(){
        const {nome, arena, enemy, imagem} = this.props;
        return(
            <div>
                <h2> Héroi: {nome}, na Arena: {arena} </h2>
                <h2> Contra: {enemy} </h2>
                {imagem? (<img src={imagem} alt={nome} style = {{width: 200}}/>) : null}
            </div>
        )
    }
}

export default Hero;