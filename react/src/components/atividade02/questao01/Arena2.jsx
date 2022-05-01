import React, { Component } from "react";
import Hero2 from './Hero2'
import saitama from '../../../imagens/saitama.png';
import minato from '../../../imagens/minato.png';
import caramelo from '../../../imagens/caramelo.jpg';

const Arena2 = () =>{
    return(
        <div>
            <Hero2 nome = 'Saitama' arena = 'Castelão' enemy = 'Aragas' imagem = {saitama} />
            <Hero2 nome = 'Minato' arena = 'Castelão' enemy = 'Aragas' imagem = {minato}/> 
            <Hero2 nome = 'Doguinho' arena= 'Castelão' enemy = 'Aragas' imagem = {caramelo}/> 
        </div>
    )
}

export default Arena2;