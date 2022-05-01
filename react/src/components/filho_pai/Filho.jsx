import React from "react";

const Filho = (props) => {
    return (
        <div>
            <button onClick={
                ()=>{
                    //alert('Ana')
                    props.notificarPai('Oi pai, tudo bem?');
                    props.grana('Estou precisando de R$ 5,00');
                }
            }>
                Enviar mensagem para o meu Pai
            </button>
        </div>
    )

}

export default Filho;