import { useContext } from "react";
import { miContexto } from "../Provider/CarroProvider";
import { Euro, EuroIcon } from "lucide-react";

function Carro () {
    const detalles = useContext(miContexto)
    console.log(detalles.cantPro)
    return (
        <div className="flex flex-col justify-normal md:justify-between md:flex-row">
        <div className="flex flex-col gap-5 px-5 py-5 md:px-20 sm:py-0">
            {detalles.cantPro.map((item , index)=>{
                return (
                    <article key={index} className="flex items-center gap-4">
                        <img src={item.imagen} alt={item.titulo} className="object-cover rounded-lg size-16 md:size-28"/>
                        <div className="text-black/80">
                            <h1 className="text-lg font-bold md:text-2xl">{item.titulo}</h1>
                            <p className="text-base font-bold text-black/50 md:text-xl">Cantidad: {item.cant}</p> 
                            <p className="flex items-center p-1 font-black rounded-full text-small bg-red-800/30 md:text-base">Precio: {<Euro size={25}/>}{item.precio}</p> 
                        </div>
                    </article>
                )
            })}
        </div>
        <div className="flex flex-col gap-2 px-5 py-5 md:gap-5 md:px-20 sm:py-0">
            <h1 className="text-3xl font-black md:text-6xl">Total a pagar es:</h1>
            <p className="flex items-center justify-start text-4xl font-black md:justify-end text-red-800/70">{<EuroIcon size={50}/>}{detalles.cantPro.reduce((acum, item) => acum + item.precio*item.cant, 0)}</p>
        </div>
        </div>
    )
}

export default Carro ;