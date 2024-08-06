import Navegador from "./Navegador";

function Header (){
    return (
        <header className="flex flex-col justify-start gap-2 px-5 py-5 text-black sm:items-center sm:justify-between lg:px-48 lg:py-10 sm:flex-row">
            <h1 className="text-xl font-bold md:text-4xl sm:text-2xl">Pato Turri</h1>
            <Navegador/>
        </header>
    )
}

export default Header ;