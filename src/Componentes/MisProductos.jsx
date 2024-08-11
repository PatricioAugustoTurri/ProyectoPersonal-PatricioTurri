import {Image} from "@nextui-org/react";
import { Link } from "react-router-dom";

function MisProductos ({ productos }) {

return (
    <section className="grid justify-center grid-cols-2 gap-4 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3">
        { productos.map((producto , index)=>{
            return (
                <article key={index} className="flex flex-col items-center gap-1 p-2 text-center rounded-lg bg-slate-100">
                    <Image
                        isZoomed
                        width={200}
                        height={200}
                        objectFit="cover"
                        alt={producto.titulo}
                        src={producto.imagen}
                    />
                     <div className="flex flex-col justify-start">
                        <h1 className="text-xl font-bold">{producto.titulo}</h1>
                        <p className="font-bold">${producto.precio}</p>
                    </div>
                <Link to="/fotos/:id" className="p-2 font-black bg-red-400 rounded-md text-black/50">VER DETALLES</Link>
                </article>
        )
        })}
    </section>
  )
}

export default MisProductos ;
