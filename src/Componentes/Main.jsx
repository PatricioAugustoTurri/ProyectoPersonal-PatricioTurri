import { Routes , Route } from "react-router-dom";
import Home from "./Home";
import Misviajes from "./Misviajes";
import Contacto from "./Contacto";
import ContactoGracias from "./ContactoGracias";
import DetallesProductos from "./DetallesProductos";
import Productos from "./Productos";

function Main (){
    return (
        <main className="flex flex-col w-auto h-auto sm:py-36">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/misviajes" element={<Misviajes/>}/>
                <Route path="/misviajes/:id" element=""/>
                <Route path="/misfotos" element={<Productos/>}/>
                <Route path="/misfotos/:id" element=""/>
                <Route path="/contacto" element={<Contacto/>}/>
                <Route path="/contacto/gracias" element={<ContactoGracias/>}/>
                <Route path="/carro" element={<DetallesProductos/>}/>
            </Routes>
        </main>
    )
}  

export default Main ;