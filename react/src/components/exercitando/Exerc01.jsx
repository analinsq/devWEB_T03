
const Herois = (props) => {
    return(
        <div>
            <ul>
                <li><h2> 1-) {props.sm} </h2></li>
                <li><h2> 2-) {props.bt} </h2></li>
                <li><h2> 3-) {props.ww} </h2></li>
            </ul>
        </div>
    )
}

// As tags <ul> e <li> servem para fazer listas

export default Herois;