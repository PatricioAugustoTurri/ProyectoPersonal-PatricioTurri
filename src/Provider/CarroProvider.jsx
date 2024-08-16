import { createContext, useContext, useState } from "react";

export const miContexto = createContext() ;
const Provider = miContexto.Provider ;

function CarroProvider (props){

    const [cant , setCant] = useState(0) ;
    const [cantPro , setCantPro] = useState([]) ;
    
    const cosas = {
        cant : cant ,
        setCant : (a) => setCant(cant + a) ,
        cantPro : cantPro ,
        setCantPro : (a) => {setCantPro(cantPro.concat(a))                        
        } ,
    }
    
    return (
        <Provider value={cosas}>
            {props.children}
        </Provider>
    )
}

export default CarroProvider ;