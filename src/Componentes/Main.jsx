import { Routes , Route } from "react-router-dom";
import Home from "./Home";
import Carro from "./Carro";
import Misviajes from "./Misviajes";
import MisFotos from "./MisFotos";
import Contacto from "./Contacto";
import ContactoGracias from "./ContactoGracias";
import DetallesProductos from "./DetallesProductos";
import { crearProducto } from "../crearProductos";

function Main (){
    crearProducto()
    return (
        <main className="flex flex-col w-auto h-auto sm:py-36">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/misviajes" element={<Misviajes/>}/>
                <Route path="/misviajes/:id" element=""/>
                <Route path="/misfotos" element={<MisFotos/>}/>
                <Route path="/misfotos/:id" element={<DetallesProductos/>}/>
                <Route path="/contacto" element={<Contacto/>}/>
                <Route path="/contacto/gracias" element={<ContactoGracias/>}/>
                <Route path="/carro" element={<Carro/>}/>
            </Routes>
        </main>
    )
}  

export default Main ;