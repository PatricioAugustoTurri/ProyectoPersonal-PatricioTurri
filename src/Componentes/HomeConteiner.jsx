import { useEffect, useState } from "react";
import { getYo } from "../crearProductos";
import Home from "./Home";

function HomeConteiner (){
    const [misCosas , setMisCosas] = useState ([])
    useEffect(()=>{
        getYo().then((res)=>{
            setMisCosas(res)
        })
    } , [])

    return (
        <Home yo={misCosas}/>
    )
}

export default HomeConteiner ;