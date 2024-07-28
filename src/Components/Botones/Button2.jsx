import { useState } from "react";

function Button2 (props) {

    const [mostar , setMostrar] = useState (true) 

     const cambio =()=> {
        setMostrar (!mostar)
     }

     if (mostar===true) {
        return <button onClick={cambio}>{props.text}</button>
     }

     if (props.text === "Mis viajes") {
     return (
            <nav className="flex gap-4 text-xs text-current">
                <a href="#" onClick={cambio}>Mis viajes</a>
                <a href="#">Tailandia</a>
                <a href="##">Vietnam</a>
                <a href="###">Malasia</a>
            </nav>
        )
    }

    if (props.text === "Portafolio"){
        return (
            <nav className="flex gap-4 text-xs text-current">
                <a href="#" onClick={cambio}>Portafolio</a>
                <a href="#">Ciudades</a>
                <a href="##">Retratos</a>
                <a href="###">Leyendas</a>
            </nav>
         )   
    }
}

export default Button2