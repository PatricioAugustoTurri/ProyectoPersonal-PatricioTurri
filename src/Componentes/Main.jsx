import { Routes , Route } from "react-router-dom";
import Misviajes from "./Misviajes";
import Contacto from "./Contacto";
import ProductosContainer from "./ProductosConteiner";
import HomeConteiner from "./HomeConteiner";
import DetalleConteiner from "./DetalleConteiner";
import Carro from "./Carro";

function Main (){
    return (
        <main className="flex flex-col w-auto h-auto sm:py-36">
            <Routes>
                <Route path="/" element={<HomeConteiner/>}/>
                <Route path="/misviajes" element={<Misviajes/>}/>
                <Route path="/misviajes/:id" element=""/>
                <Route path="/misfotos" element={<ProductosContainer/>}/>
                <Route path="/portfolio" element={<ProductosContainer/>}/>
                <Route path="/misfotos/:id" element={<ProductosContainer/>}/>
                <Route path="/misfotos/detalle/:id" element={<DetalleConteiner/>}/>
                <Route path="/contacto" element={<Contacto/>}/>
                <Route path="/contacto/gracias" element=""/>
                <Route path="/carro" element={<Carro/>}/>
            </Routes>
        </main>
    )
}  

export default Main ;