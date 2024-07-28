import NavBar from "./NavBar"

function Header () {
    return (
        <header className="flex justify-between p-4">
            <h1 className="text-3xl font-bold ">Pato Turri</h1>
            <NavBar/>
        </header>
    )
}

export default Header  