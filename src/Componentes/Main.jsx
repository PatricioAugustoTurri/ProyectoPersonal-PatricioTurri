import { Routes , Route } from "react-router-dom";
import Home from "./Home";
import Carro from "./Carro";
import Misviajes from "./Misviajes";
import MisFotos from "./MisFotos";
import Contacto from "./Contacto";
import ContactoGracias from "./ContactoGracias";

function Main (){
    return (
        <main className="flex flex-col w-auto h-auto">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/misviajes" element={<Misviajes/>}/>
                <Route path="/misviajes/:id" element=""/>
                <Route path="/misfotos" element={<MisFotos/>}/>
                <Route path="/misfotos/:id" element=""/>
                <Route path="/contacto" element={<Contacto/>}/>
                <Route path="/contacto/gracias" element={<ContactoGracias/>}/>
                <Route path="/carro" element={<Carro/>}/>
            </Routes>
        </main>
    )
}  

export default Main ;