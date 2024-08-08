import { Map, Smile } from "lucide-react";

function Misviajes (){
    return (
        <div className="justify-center text-black">
            <h1 className="flex flex-col items-center gap-2 text-4xl font-bold text-center">MIS VIAJES <Map size={60}/></h1>
            <div className="flex gap-12 px-48 py-12">
                <img src="/public/Lugares historicos/_1001791.jpg" alt="Budas" className="w-auto h-svh" />
                <p className="flex items-center self-center gap-1 text-xl">Estos son algunos de mis viajes (por ahora{<Smile size={20}/>}.)
                </p>
            </div>
        </div>
    )
}

export default Misviajes ;
