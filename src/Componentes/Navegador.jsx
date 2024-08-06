import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { miContexto } from "../Provider/CarroProvider";


function Navegador (){
    const cantCarro = useContext(miContexto);

    return (
        <nav className="flex gap-5 text-xs font-bold transition-opacity duration-500 ease-in-out ">
            <Link to="/">INICIO</Link>
                <div className="inline-block group">
                    <button className="flex items-center text-center">
                        <Link to="/misviajes">MIS VIAJES</Link>
                        <span>
                            <svg className="w-4 h-4 transition duration-150 ease-in-out transform fill-current group-hover:-rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                            </svg>
                        </span>
                    </button>
                    <div className="absolute flex flex-col text-center transition-transform duration-150 ease-in-out origin-top transform scale-0 bg-slate-100 rounded-xl group-hover:scale-100 min-w-32">
                        <Link to="/misviajes/América" className="px-3 py-1 font-serif text-xs text-slate-400 hover:bg-gray-500 rounded-xl">AMERICA</Link>
                        <Link to="/misviajes/Asia" className="px-3 py-1 font-serif text-xs text-slate-400 hover:bg-gray-500 rounded-xl">ASIA</Link>
                        <Link to="/misviajes/Asia" className="px-3 py-1 font-serif text-xs text-slate-400 hover:bg-gray-500 rounded-xl">EUROPA</Link>
                    </div>
                </div>
                <div className="inline-block group">
                    <button className="flex items-center text-center">
                        <Link to="/misfotos">MIS FOTOS</Link>
                        <span>
                            <svg className="w-4 h-4 transition duration-150 ease-in-out transform fill-current group-hover:-rotate-180"xmlns="http://www.w3.org/2000/svg"viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                            </svg>
                        </span>
                    </button>
                    <div className="absolute flex flex-col text-center transition-transform duration-150 ease-in-out origin-top transform scale-0 bg-slate-100 rounded-xl group-hover:scale-100 min-w-32">
                        <Link to="/misfotos/retratos" className="px-3 py-1 font-serif text-xs text-slate-400 hover:bg-gray-500 rounded-xl">RETRATOS</Link>
                        <Link to="/misfotos/paisajes" className="px-3 py-1 font-serif text-xs text-slate-400 hover:bg-gray-500 rounded-xl">PAISAJES</Link>
                        <Link to="/misfotos/lh" className="px-3 py-1 font-serif text-xs text-slate-400 hover:bg-gray-500 rounded-xl">LUGARES HISTORICOS</Link>
                        <Link to="/misfotos/ciudades" className="px-3 py-1 font-serif text-xs text-slate-400 hover:bg-gray-500 rounded-xl">CIUDADES</Link>
                    </div>
                </div>
                <Link className="flex items-center gap-1" to="/carro">{cantCarro.cant}{<ShoppingCart size={15}/>}</Link>
                <Link to="/contacto">CONTACTO</Link>
            </nav>
    )
}

export default Navegador ;

