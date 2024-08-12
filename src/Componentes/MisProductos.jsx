import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function MisProductos ({ productos }) {
const parametro = useParams ()

if(parametro.id === undefined){
return (
    <div className="">
        <h1 className="flex px-10 font-sans text-xl font-black md:px-20 md:text-4xl">Todas mis fotos</h1>
        <section className="gap-5 p-10 columns-2 lg:columns-3 xl:columns-4">
            {productos.map((producto , index)=>{
                return (
                    <Link to={"/misfotos/detalle/" + producto.titulo} key={index} className="">
                        <img src={producto.imagen} 
                            alt={producto.titulo} 
                            className="w-full py-3 transition hover:shadow-sm hover:scale-125 duration-250"/>
                    </Link>
                )
            })}
        </section>
    </div>
  )
} else if(parametro.id === "retratos"){
    return (
        <section className="grid justify-center grid-cols-2 gap-2 p-4 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3">
            <h1>Retratos</h1>
            { productos.map((producto , index)=>{
                return (
                    <Link to={"/misfotos/detalle/" + producto.titulo} key={index} className="flex flex-col items-center gap-1 p-2 text-center rounded-lg bg-slate-100">
                        <img src={producto.imagen} 
                            alt={producto.titulo} 
                            className="flex items-center object-cover transition duration-300 ease-in-out delay-150 scale-50 size-80 bg-flex hover:scale-110 transform-gpu"/>
                         <div className="flex flex-col justify-start">
                            <h1 className="text-xl font-bold">{producto.titulo}</h1>
                            <p className="font-bold">${producto.precio}</p>
                        </div>
                    </Link>
            )
            })}
        </section>
      )
}
}
export default MisProductos ;
