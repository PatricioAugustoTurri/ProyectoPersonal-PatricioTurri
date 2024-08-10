import { useEffect, useState } from "react";
import { getProductos } from "../crearProductos";
import MisProductos from "./MisProductos";

function ProductosContainer (){
    
    const [misPro , setMisPro] = useState ([])
    useEffect(()=>{
        getProductos().then((res)=>{
            setMisPro(res)
        })
    }, [])
    return (
        <div>
            <MisProductos productos={misPro}/>
        </div>  
    )
}

export default ProductosContainer ;