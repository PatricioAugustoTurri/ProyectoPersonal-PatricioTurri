import { createContext, useState } from "react";

export const miContexto = createContext() ;
const Provider = miContexto.Provider ;

function CarroProvider (props){

    const [cant , setCant] = useState(0) ;
    
    const cosas = {
        cant : cant ,
        setCant : () => setCant(cant + 1)
    }

    return (
        <Provider value={cosas}>
            {props.children}
        </Provider>
    )
}

export default CarroProvider ;