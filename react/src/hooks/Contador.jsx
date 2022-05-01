import React, {Component, useState, useEffect} from 'React';

const Contador = () => {
    //let contador = 0
    const {contador, setContador} = useState (0);
    const {status, setStatus} = useState ('PAR');

    useEffect(
        ()=>{
            if(contador%2 == 0) setStatus ('PAR');
            else setStatus ('ÍMPAR');
        },
        [contador]
    )
    return (
        <div>
            <h2> Valor do Contador: {contador} </h2>
            <h2> Par ou ímpar? {status} </h2>
            <button on Click ={() => setContador(contador+1)}> 

                Aumentar contador
            </button>
        </div>
    )
}

// class Contador extends Component {
//     constructor(props){
//         super(props)
//         this.state = {contador: 0}
//     }

//     render() {
//         return (
//             <div>
//                 <h2>
//                     Valor do contador : {this.state.contador}
//                     <button on Clcik = {() => this.setState({contador:this.state})}>
//                         Aumentar contador
//                     </button>
//                 </h2>
//             </div>
//         )
//     }
// }

export default Contador;