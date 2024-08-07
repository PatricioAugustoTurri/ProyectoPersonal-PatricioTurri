import { useContext, useState } from "react";
import { miContexto } from "../Provider/CarroProvider";
import { CircleMinus, CirclePlus } from "lucide-react";
import {Button} from "@nextui-org/react";

function DetallesProductos (){
    const cantCarro = useContext(miContexto)
    const [pro , setPro] = useState(1)

    const suma = () =>{
        if (pro>0 && pro < 10){
            setPro(pro + 1)
        }
    }
    const resta = () =>{
        if (pro > 1){
            setPro(pro - 1)
        }
    }

    const sumarTotal = () =>{
        cantCarro.setCant(pro)
        setPro(1)
    }

    return(
        <div className="flex flex-col gap-5 px-32 text-center">
            <h1 className="text-3xl font-bold">Detalles de los productos</h1>
            <p>mklmasdmaslkdma klmdsamdlkamd samdlmasl dmaslmdalsmdlkasm </p>
            <div className="flex items-center justify-center gap-5 p-10">
                <Button size="sm" onClick={suma}><CirclePlus/></Button> 
                <Button size="sm" onClick={resta}><CircleMinus/></Button> 
                <h1 className="text-xl font-bold">{pro}</h1>
                <Button color="success" onClick={sumarTotal}>Agregar</Button>
            </div>
        </div> 
    )
}

export default DetallesProductos ;