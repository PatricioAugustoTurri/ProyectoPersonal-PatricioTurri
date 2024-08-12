import { BadgeEuro, CircleMinus, CirclePlus, ShoppingBasket} from "lucide-react";

function Detalle ({detalle}){
    return (
        <div>
            {detalle.map((item)=>{
                return (
                    <div className="flex gap-4 px-20">
                        <img src={item.imagen} alt={item.titulo} className="float-left w-1/2 transition duration-700 rounded-xl hover:shadow-sm hover:scale-110"/>
                        <div className="flex flex-col justify-start gap-3 p-4">
                            <h1 className="text-2xl font-bold">{item.titulo}</h1>
                            <p>Aca tengp que escribir el detalle, donde la hice, como la hice y que me inspira la foto</p>
                            <p className="flex items-center text-sm font-black text-red-700/60"><BadgeEuro size={20}/> {item.precio}</p>
                            <div className="flex items-center gap-4 p-2 rounded-full bg-red-800/30">
                                <p>numero</p>
                                <button className=""><CirclePlus /></button>
                                <button><CircleMinus /></button>
                                <button className=""><ShoppingBasket size={60} /></button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Detalle ;