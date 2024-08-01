import Navegador from "./Navegador";

function Header (){
    return (
        <header className="flex items-center justify-between px-48 py-10 text-black">
            <h1 className="text-4xl font-bold">Pato Turri</h1>
            <Navegador/>
        </header>
    )
}

export default Header ;