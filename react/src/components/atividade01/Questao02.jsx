import React from 'react';

class Info extends React.Component{
    render(){
        return(
            <div> 
                <h2> Nome: {this.props.nome} </h2>
                <h2> Curso: {this.props.curso} </h2>
                <h2> Cidade: {this.props.cidade} </h2>

            </div>
        )
    }
}

export default Info;