import Navegador from "./Navegador";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { miContexto } from "../Provider/CarroProvider";


function Header (){
    const cantCarro = useContext(miContexto);
    
    return (
        <header className="flex flex-col justify-start gap-2 px-5 py-5 text-black sm:shadow-small sm:items-center sm:justify-between lg:px-48 lg:py-10 sm:flex-row sm:fixed sm:top-0 sm:left-0 sm:right-0 sm:w-full sm:z-50 sm:bg-white">
            <div className="flex items-center justify-between">
                <Link to="/" className="text-xl font-bold md:text-4xl sm:text-2xl">Pato Turri</Link>
                <Link className="flex items-center gap-1 text-xl font-bold sm:hidden" to="/carro">{cantCarro.cant}{<ShoppingCart size={22}/>}</Link>
            </div>
            <Navegador/>
        </header>
    )
}

export default Header ;


