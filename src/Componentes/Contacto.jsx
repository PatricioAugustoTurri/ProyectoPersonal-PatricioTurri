import { Mail, Send } from "lucide-react";
import { useState } from "react";

function Contacto (){
    const detalle = {
        nombre: "",
        apellido: "",
        telefono: "",
        email: "", 
    }
    const [form , setForm] = useState(detalle);
     const enviar = (e) => {
        const {name , value} = e.target;
        setForm({
            ... form , 
            [name] : value,
        })
    }
    const formulario = (e) => {
        e.preventDefault();
        setForm(detalle);
    }
 
    return ( 
        <div>       
            <div className="flex flex-col gap-2 px-7 sm:px-32">
                <h1 className="flex items-center gap-2 text-3xl font-bold text-center">CONTACTO {<Mail size={30}/>}</h1>
                <p className="text-base">Comunicate conmigo de lo que necesites.</p>
            </div>
            <form onSubmit={formulario} className="flex flex-col justify-center gap-3 px-6 py-4 sm:px-32">
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-black sm:text-base text-black/50">Nombre</p>
                    <input  type="text" 
                            className="px-4 py-2 border-2 rounded-lg border-black/50 bg-slate-200" 
                            name="nombre"
                            value={form.nombre}
                            onChange={enviar}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-black sm:text-base text-black/50">Apellido</p>
                    <input  type="text" 
                            className="px-4 py-2 border-2 rounded-lg border-black/50 bg-slate-200" 
                            name="apellido"
                            value={form.apellido}
                            onChange={enviar}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-black sm:text-base text-black/50">Telefono</p>
                    <input  type="text" 
                            className="px-4 py-2 border-2 rounded-lg border-black/50 bg-slate-200" 
                            name="telefono"
                            value={form.telefono}
                            onChange={enviar} 
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-black sm:text-base text-black/50">Email</p>
                    <input  type="email"
                            className="px-4 py-2 border-2 rounded-lg border-black/50 bg-slate-200" 
                            name="email"
                            value={form.email}
                            onChange={enviar} 
                    />
                </div>
                <div className="flex justify-end w-full py-4">
                    <button type="submit" 
                            className="flex items-center justify-center gap-2 px-4 py-2 font-black border-2 rounded-lg border-black/50 bg-slate-200">Enviar <Send size={18}/></button>
                </div>
            </form>
        </div>
    )
}

export default Contacto ;

