import React, { Component } from "react";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

class CidadeCC extends Component {
    constructor(props) {
        super(props)
        this.state = {fortaleza: 0, quixada: 0, quixeramobim: 0}
    }

    votarFortaleza(){
        this.setState({fortaleza: this.state.fortaleza+1})
    }
    votarQuixada(){
        this.setState({quixada: this.state.quixada+1})
    }
    votarQuixeramobim(){
        this.setState({quixeramobim: this.state.quixeramobim+1})
    }

    render(){

        return (
            <div>
                <h3>Fortaleza: {this.state.fortaleza}</h3>
                <h3>Quixadá: {this.state.quixada}</h3>
                <h3>Quixeramobim: {this.state.quixeramobim}</h3>
                    
                <button onClick ={()=>this.votarFortaleza()}>
                    Votar em Fortaleza
                </button>
                <button onClick ={()=>this.votarQuixada()}>
                    Votar em Quixadá
                </button>
                <button onClick ={()=>this.votarQuixeramobim()}>
                    Votar em Quixeramobim
                </button>
            </div>
        )
    }

}

export default CidadeCC