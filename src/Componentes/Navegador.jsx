import { Link } from "react-router-dom";

function Navegador (){
    return (
        <nav className="flex items-center gap-4 text-base font-bold">
            <Link to="/">Home</Link>
            <Link to="/Mis viajes">Mis viajes</Link>
            <Link to="/Mis fotos">Mis fotos</Link>
            <Link to="/Carro">0</Link>
        </nav>
    )
}

export default Navegador ;
