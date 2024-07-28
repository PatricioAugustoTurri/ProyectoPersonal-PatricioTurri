function Button (props) {
    
    if (props.text === "Inicio") {
        return <a href="#">{props.text}</a>
    } 

    if (props.text === "Mi equipo"){
        return <a href="#####">{props.text}</a>
    } 
}

export default Button