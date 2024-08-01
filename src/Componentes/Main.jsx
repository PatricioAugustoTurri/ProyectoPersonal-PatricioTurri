import { Routes , Route } from "react-router-dom";
import Home from "./Home";
import Carro from "./Carro";

function Main (){
    return (
        <main className="flex w-auto h-screen px-10">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Mis viajes" element={<h1>Mis viajes</h1>}/>
                <Route path="/Mis fotos" element={<h1>Mis fotos</h1>}/>
                <Route path="/Carro" element={<Carro/>}/>
            </Routes>
        </main>
    )
}  

export default Main ;