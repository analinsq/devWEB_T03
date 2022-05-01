import React, { Component } from "react";
import Arena2 from "./Arena2";

const Hero2 = (props) => {
    const {nome, arena, enemy, imagem} = props
        return(
            <div>
                <h2> Héroi: {nome}, na Arena: {arena} </h2>
                <h2> Contra: {enemy} </h2>
                {imagem? (<img src={imagem} alt={nome} style = {{width: 200}}/>) : null}
            </div>
        )
}

export default Hero2;