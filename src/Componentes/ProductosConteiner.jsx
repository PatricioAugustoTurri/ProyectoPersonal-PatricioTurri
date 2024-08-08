import { useEffect, useState } from "react";
import { getProductos } from "../crearProductos";
import Productos from "./Productos";

function ProductosContainer (){
    const [productos, setProductos] = useState()
    useEffect(()=>{
        getProductos().then((res)=>{
            setProductos(res)
            console.log(res)
            })
        })
    },[])
    console.log(productos)
    return (
        <div>
            <Productos productos={productos}/>
        </div>
    )
}

export default ProductosContainer ;