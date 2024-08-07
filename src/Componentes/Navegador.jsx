import { ChevronLeft, ChevronRight, Menu,  ShoppingCart, X } from "lucide-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { miContexto } from "../Provider/CarroProvider";

function Navegador (){
    const cantCarro = useContext(miContexto);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    return (
        <div>
            <div className="hidden sm:block">
                <nav className="flex gap-5 text-xs font-bold transition-opacity duration-500 ease-in-out">
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
            </div>
            <div className="flex-col block sm:hidden">
                <button onClick={() => setIsOpen(!isOpen)}><Menu size={25}/></button>
                <div className= {`${!isOpen && "hidden"} fixed top-0 left-0 right-0 w-full min-h-screen bg-slate-600/50 backdrop-blur-sm`} onClick={() => setIsOpen(!isOpen)}></div>   
                <div className={`${isOpen ? "w-80" : "w-0"} fixed top-0 left-0 flex flex-col min-h-screen text-sm text-black bg-white transition-all duration-300`}>
                    <div className={`${!isOpen && "hidden"} flex flex-col justify-between gap-4 p-5`}>
                        <button className="flex justify-end" onClick={() => setIsOpen(!isOpen)}><X size={30}/></button>
                        <div className="flex flex-col gap-4 font-bold">
                            <Link to="/" onClick={() => setIsOpen(!isOpen)}>INICIO</Link>
                            <button className="flex justify-between"onClick={() => setIsOpen2(!isOpen2)}>MIS VIAJES<ChevronRight size={20}/></button>
                            <div className={`${isOpen2 ? "w-80" : "w-0"} fixed top-0 left-0 flex flex-col min-h-screen text-sm text-black bg-white transition-all duration-300`}>
                                <div className={`${!isOpen2 && "hidden"} flex flex-col justify-end gap-4 px-5 py-16`}>
                                    <button onClick={()=>setIsOpen2(!isOpen2)} className="flex justify-end"><ChevronLeft size={20}/></button>
                                    <Link to="/misviajes/América" onClick={() => {setIsOpen2(!isOpen2) ; setIsOpen(!isOpen)}}>AMERICA</Link>
                                    <Link to="/misviajes/Asia" onClick={() =>{setIsOpen2(!isOpen2) ; setIsOpen(!isOpen)}}>ASIA</Link>
                                    <Link to="/misviajes/Asia" onClick={() => {setIsOpen2(!isOpen2) ; setIsOpen(!isOpen)}}>EUROPA</Link>
                                </div>
                            </div>
                            <button className="flex justify-between" onClick={()=>setIsOpen2(!isOpen2)}>MIS FOTOS<ChevronRight size={20}/></button>
                            <div className={`${isOpen2 ? "w-80" : "w-0"} fixed top-0 left-0 flex flex-col min-h-screen text-sm text-black bg-white transition-all duration-300`} >
                                <div className={`${!isOpen2 && "hidden"} flex flex-col justify-end gap-4 px-5 py-16`}>
                                    <button className="flex justify-end" onClick={()=>setIsOpen2(!isOpen2)}><ChevronLeft size={20}/></button>
                                    <Link to="/misfotos/retratos" className="" onClick={() => {setIsOpen2(!isOpen2) ; setIsOpen(!isOpen)}}>RETRATOS</Link>
                                    <Link to="/misfotos/paisajes" className="" onClick={() => {setIsOpen2(!isOpen2) ; setIsOpen(!isOpen)}}>PAISAJES</Link>
                                    <Link to="/misfotos/lh" className="" onClick={() => {setIsOpen2(!isOpen2) ; setIsOpen(!isOpen)}}>LUGARES HISTORICOS</Link>
                                    <Link to="/misfotos/ciudades" className="" onClick={() => {setIsOpen2(!isOpen2) ; setIsOpen(!isOpen)}}>CIUDADES</Link>
                                </div>
                            </div>
                            <Link className="flex items-center gap-1" to="/carro" onClick={() => setIsOpen(!isOpen)}>{cantCarro.cant}{<ShoppingCart size={15}/>}</Link>
                            <Link to="/contacto" onClick={() => setIsOpen(!isOpen)}>CONTACTO</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navegador ;
