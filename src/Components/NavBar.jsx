import Button from "./Botones/Button"
import Button2 from "./Botones/Button2"

function NavBar () {
    return (
        <div className="flex gap-4 text-xs text-current ">
            <Button text ="Inicio"/>
            <Button2 text ="Mis viajes"/>
            <Button2 text = "Portafolio"/>
            <Button text ="Mi equipo"/>
        </div>
    )
}

export default NavBar