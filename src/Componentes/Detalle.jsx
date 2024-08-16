import { BadgeEuro, CircleMinus, CirclePlus, ShoppingBasket} from "lucide-react";
import { useContext, useState } from "react";
import { miContexto } from "../Provider/CarroProvider";

function Detalle ({detalle}){
    const [numero, setNumero] = useState(1);
    const sumar = () => {
        if (numero > 0 && numero < 10) {
            setNumero (numero + 1);
        }
    }
    const restar = () => {
        if (numero > 1) {
            setNumero (numero - 1);
        }
    }
    const cantCarro = useContext(miContexto);

    const alCarro = () => {
        detalle.map((item)=>{
            item.cant = numero
        })
        cantCarro.setCant(numero)
        cantCarro.setCantPro (detalle)
    }

    return (
        <div>
            {detalle.map((item , index)=>{
                return (
                    <div key={index} className="gap-4 px-5 md:flex md:px-20">
                        <img src={item.imagen} 
                            alt={item.titulo} 
                            className="float-left transition duration-1000 md:float-none size-auto md:size-96 rounded-xl hover:shadow-sm md:hover:scale-125 md:hover:translate-x-52 md:hover:translate-y-20 md:hover:size-2/3 md:hover:aspect-auto md:object-cover"/>
                        <div className="flex flex-col justify-start gap-3 p-4">
                            <h1 className="text-2xl font-bold">{item.titulo}</h1>
                            <p>Aca tengp que escribir el detalle, donde la hice, como la hice y que me inspira la foto</p>
                            <p className="flex items-center gap-1 text-xl font-black text-red-700/60"><BadgeEuro size={28}/> {item.precio}</p>
                            <div className="flex items-center gap-4 p-2">
                                <p className="p-2 px-5 font-black rounded-full bg-red-800/30">{numero}</p>
                                <button className="p-2 rounded-full bg-red-800/30" onClick={sumar}><CirclePlus /></button>
                                <button className="p-2 rounded-full bg-red-800/30" onClick={restar}><CircleMinus /></button>
                                <button className="p-2 rounded-full bg-red-800/30" onClick={alCarro}><ShoppingBasket size={60} /></button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Detalle ;