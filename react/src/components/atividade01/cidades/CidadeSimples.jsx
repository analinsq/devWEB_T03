import React from "react";

const CidadeSimples = () =>{
    let fortaleza = 0, quixada = 0, quixeramobim = 0

    return (
        <div>
            <h3>Fortaleza: {fortaleza} </h3>
            <h3>Quixadá: {quixada} </h3>
            <h3>Quixeramobim: {quixeramobim} </h3>

            <button onClick={()=> fortaleza++}>
                Votar em Fortaleza
            </button>
            <button onClick={()=> quixada++}>
                Votar em Quixadá
            </button>
            <button onClick={()=> quixeramobim++}>
                Votar em Quixeramobim
            </button>
        </div>
    )
}

export default CidadeSimples;