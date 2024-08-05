import {Input , Button} from "@nextui-org/react";
import { Mail } from "lucide-react";
import { useState } from "react";

function Contacto (){
    const [nombre , setNombre] = useState("");
    const [apellido , setApellido] = useState("");
    const [telefono , setTelefono] = useState("");
    const [email , setEmail] = useState("");
    const [mensaje , setMensaje] = useState(false);

    const enviar = () => {
        if(nombre === "" || apellido === "" || telefono === "" || email === ""){
            alert("Todos los campos son requeridos")
        } else {
            setMensaje(!mensaje)
            console.log(mensaje)
            if(mensaje == true){
                return (
                    <h1>Gracias por contactarnos</h1>
                )
            }
        }
    }
    
    return ( 
        <div>       
            <div className="flex flex-col gap-2 px-32">
                <h1 className="flex items-center gap-2 text-3xl font-bold text-center">CONTACTO {<Mail size={25}/>}</h1>
                <p className="text-base">Comunicate conmigo de lo que necesites.</p>
            </div>
            <div className="flex flex-col w-full gap-4 px-40 py-12 md:flex-nowrap">
                <Input type="text" label="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                <Input type="text" label="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)}/>
                <Input type="text" label="Telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
                <Input type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Button onClick={enviar}>Enviar</Button>
            </div>
        </div>
    )
}

export default Contacto ;