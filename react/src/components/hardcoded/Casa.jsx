import React, { Component } from "react";
import Personagem from "./Personagem";

class Casa extends Component{
    render (){
        return(
                <div>
                    {/* <Personagem nome = 'Arya' casa = 'Stark'/>
                    <Personagem nome = 'Tyrion' casa = 'Lannister'/>
                    <Personagem nome = 'Jhon' casa = 'Stark'/>  */}
                    
                    {/* {this.props.children} */}

                    <h1> Casa {this.props.show}</h1>
                    {React.Children.map(
                        this.props.children, Personagem => {
                            return React.cloneElement(
                                Personagem, {casa:this.props.casa,
                                            horario:this.props.horario});
                            }
                        )   
                    }
                </div>
            )
    }
}

export default Casa;