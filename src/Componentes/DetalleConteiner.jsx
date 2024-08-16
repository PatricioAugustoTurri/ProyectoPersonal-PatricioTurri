import { useParams } from "react-router-dom";
import Detalle from "./Detalle";
import { useEffect, useState } from "react";
import { getProductos } from "../crearProductos";

function DetalleConteiner (){
    const para = useParams ()
    const [deta , setDeta] = useState ([])
    useEffect (()=>{
        getProductos().then((res)=>{
            setDeta(res.filter((item)=>{
                return item.titulo === para.id
            }))
        })
    } , [para.id])

    return (
        <Detalle detalle={deta}/>
    )

}

export default DetalleConteiner ;