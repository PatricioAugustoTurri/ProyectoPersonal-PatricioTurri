import { useEffect, useState } from "react";
import { getProductos } from "../crearProductos";
import MisProductos from "./MisProductos";
import { useParams } from "react-router-dom";

function ProductosContainer (){
    
    const [misPro , setMisPro] = useState ([])
    const para = useParams()
    
    if(para.id){
        useEffect(()=>{
            getProductos().then((res)=>{
                setMisPro(res.filter((pro)=>{
                    return pro.categoria === para.id
                }))
            })
        } , [para.id])
    }else{
        useEffect(()=>{
            getProductos().then((res)=>{
                setMisPro(res)
            })
        }, [])
    }

    return (
        <div>
            <MisProductos productos={misPro}/>
        </div>  
    )
}

export default ProductosContainer ;