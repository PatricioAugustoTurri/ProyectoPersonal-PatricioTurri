import { Routes , Route } from "react-router-dom";

function Main (){
    return (
        <main className="flex w-auto h-screen">
            <Routes>
                <Route path="/" element={<h1>Home</h1>}/>
                <Route path="/Mis viajes" element={<h1>Mis viajes</h1>}/>
                <Route path="/Mis fotos" element={<h1>Mis fotos</h1>}/>
            </Routes>
        </main>
    )
}  

export default Main ;