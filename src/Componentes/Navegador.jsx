import { Link } from "react-router-dom";

function Navegador (){
    return (
        <nav className="flex gap-5 text-base font-bold transition-opacity duration-500 ease-in-out">
            <Link to="/">Inicio</Link>
                <div className="inline-block group">
                    <button className="flex items-center text-center">
                        <Link to="/misviajes">Mis viajes</Link>
                        <span>
                            <svg className="w-4 h-4 transition duration-150 ease-in-out transform fill-current group-hover:-rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                            </svg>
                        </span>
                    </button>
                    <div className="absolute flex flex-col text-center transition-transform duration-150 ease-in-out origin-top transform scale-0 bg-slate-100 rounded-xl group-hover:scale-100 min-w-32">
                        <Link to="/misviajes/América" className="px-3 py-2 font-serif text-base font-bold text-slate-400 hover:bg-gray-500 rounded-xl">América</Link>
                        <Link to="/misviajes/Asia" className="px-3 py-2 font-serif text-base font-bold text-slate-400 hover:bg-gray-500 rounded-xl">Asia</Link>
                        <Link to="/misviajes/Asia" className="px-3 py-2 font-serif text-base font-bold text-slate-400 hover:bg-gray-500 rounded-xl">Europa</Link>
                    </div>
                </div>
                <div className="inline-block group">
                    <button className="flex items-center text-center">
                        <Link to="/misfotos">Mis fotos</Link>
                        <span>
                            <svg className="w-4 h-4 transition duration-150 ease-in-out transform fill-current group-hover:-rotate-180"xmlns="http://www.w3.org/2000/svg"viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                            </svg>
                        </span>
                    </button>
                    <div className="absolute flex flex-col text-center transition-transform duration-150 ease-in-out origin-top transform scale-0 bg-slate-100 rounded-xl group-hover:scale-100 min-w-32">
                        <Link to="/misfotos/retratos" className="px-3 py-2 font-serif text-base font-bold text-slate-400 hover:bg-gray-500 rounded-xl">Retratos</Link>
                        <Link to="/misfotos/paisajes" className="px-3 py-2 font-serif text-base font-bold text-slate-400 hover:bg-gray-500 rounded-xl">Paisajes</Link>
                        <Link to="/misfotos/lh" className="px-3 py-2 font-serif text-base font-bold text-slate-400 hover:bg-gray-500 rounded-xl">Lugaes históricos</Link>
                        <Link to="/misfotos/ciudades" className="px-3 py-2 font-serif text-base font-bold text-slate-400 hover:bg-gray-500 rounded-xl">Ciudades</Link>
                    </div>
                </div>
                <Link to="/carro">0</Link>
            </nav>
    )
}

export default Navegador ;

