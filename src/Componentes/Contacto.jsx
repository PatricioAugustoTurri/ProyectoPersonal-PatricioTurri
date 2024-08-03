import {Input , Button} from "@nextui-org/react";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

function Contacto (){
    const enviar = () => {
        console.log("Enviado")
        return (
            <h1>Gracias por contactarnos</h1>
        )
    }
    return ( 
        <div>       
            <div className="flex flex-col gap-2 px-32">
                <h1 className="flex items-center gap-2 text-3xl font-bold text-center">CONTACTO {<Mail size={25}/>}</h1>
                <p className="text-base">Comunicate conmigo de lo que necesites.</p>
            </div>
            <div className="flex flex-col w-full gap-4 px-40 py-12 md:flex-nowrap">
                <Input type="text" label="Nombre"/>
                <Input type="text" label="Apellido"/>
                <Input type="text" label="Telefono"/>
                <Input type="email" label="Email"/>
                <Link to="/contacto/gracias"><Button>Enviar</Button></Link>
            </div>
        </div>
    )
}

export default Contacto ;