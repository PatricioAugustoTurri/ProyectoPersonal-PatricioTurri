import { Routes , Route } from "react-router-dom";
import Home from "./Home";
import Carro from "./Carro";

function Main (){
    return (
        <main className="flex flex-col w-screen h-auto">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/misviajes" element={<h1>Mis viajes</h1>}/>
                <Route path="/misfotos" element={<h1>Mis fotos</h1>}/>
                <Route path="/carro" element={<Carro/>}/>
            </Routes>
        </main>
    )
}  

export default Main ;