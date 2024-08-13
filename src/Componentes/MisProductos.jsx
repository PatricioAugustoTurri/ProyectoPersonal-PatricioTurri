import LazyLoad from "react-lazyload";
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
                        <LazyLoad>
                        <img src={producto.imagen} 
                            alt={producto.titulo} 
                            className="py-3 transition duration-1000 bg-cover size-auto hover:shadow-sm hover:scale-125"
                        />
                        </LazyLoad>
                    </Link>
                )
            })}
        </section>
    </div>
  )
} else if(parametro.id === "retratos"){
    return (
        <div className="">
            <h1 className="flex px-10 font-sans text-xl font-black md:px-20 md:text-4xl">Retratos</h1>
            <section className="gap-5 p-10 columns-2 lg:columns-3 xl:columns-4">
                {productos.map((producto , index)=>{
                    return (
                        <Link to={"/misfotos/detalle/" + producto.titulo} key={index} className="">
                            <LazyLoad>
                            <img src={producto.imagen} 
                                alt={producto.titulo} 
                                className="py-3 transition duration-1000 bg-cover size-auto hover:shadow-sm hover:scale-125"/>
                                </LazyLoad>
                        </Link>
                    )
                })}
            </section>
        </div>
      )
} if(parametro.id === "paisaje"){
    return (
        <div className="">
            <h1 className="flex px-10 font-sans text-xl font-black md:px-20 md:text-4xl">Paisajes</h1>
            <section className="gap-5 p-10 columns-2 lg:columns-3 xl:columns-4">
                {productos.map((producto , index)=>{
                    return (
                        <Link to={"/misfotos/detalle/" + producto.titulo} key={index} className="">
                            <LazyLoad>
                            <img src={producto.imagen} 
                                alt={producto.titulo} 
                                className="py-3 transition duration-1000 bg-cover size-auto hover:shadow-sm hover:scale-125"/>
                                </LazyLoad>
                        </Link>
                    )
                })}
            </section>
        </div>
      )
    } if(parametro.id === "lh"){
        return (
            <div className="">
                <h1 className="flex px-10 font-sans text-xl font-black md:px-20 md:text-4xl">Lugares históricos</h1>
                <section className="gap-5 p-10 columns-2 lg:columns-3 xl:columns-4">
                    {productos.map((producto , index)=>{
                        return (
                            <Link to={"/misfotos/detalle/" + producto.titulo} key={index} className="">
                                <LazyLoad>
                                <img src={producto.imagen} 
                                    alt={producto.titulo} 
                                    className="py-3 transition duration-1000 bg-cover size-auto hover:shadow-sm hover:scale-125"/>
                                    </LazyLoad>
                            </Link>
                        )
                    })}
                </section>
            </div>
          )
        } if(parametro.id === "ciudad"){
            return (
                <div className="">
                    <h1 className="flex px-10 font-sans text-xl font-black md:px-20 md:text-4xl">Ciudades</h1>
                    <section className="gap-5 p-10 columns-2 lg:columns-3 xl:columns-4">
                        {productos.map((producto , index)=>{
                            return (
                                <Link to={"/misfotos/detalle/" + producto.titulo} key={index} className="">
                                    <img src={producto.imagen} 
                                        alt={producto.titulo} 
                                        className="py-3 transition duration-1000 bg-cover size-auto hover:shadow-sm hover:scale-125"
                                        loading="lazy"
                                    />
                                </Link>
                            )
                        })}
                    </section>
                </div>
              )
            }
}

export default MisProductos ;
