import {Input , Button} from "@nextui-org/react";

function Carro (){
    return (        
        <div className="flex flex-col w-full gap-4 px-36 md:flex-nowrap">
            <Input type="text" label="Nombre" />
            <Input type="text" label="Apellido" />
            <Input type="text" label="Telefono" />
            <Input type="email" label="Email" placeholder="Email" />
            <Button radius="lg" className="text-xl font-bold" type="submit">Enviar</Button> 
        </div>
    )
}

export default Carro ;