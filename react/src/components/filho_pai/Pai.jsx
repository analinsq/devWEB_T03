import React from "react";
import Filho from "./Filho";

const Pai = () => {
    function mensagemRecebida(msg, grana) {
        // olhar esse erro no github
        alert ('Recebi do meu filho: ' + msg, grana);
    }

    return (
        <div>
            <Filho notificarPai= {mensagemRecebida}/>
        </div>
    )
}



export default Pai;