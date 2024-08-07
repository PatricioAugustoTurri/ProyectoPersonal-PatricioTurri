import YoutubePlayer from "react-player/youtube";
import DetallesProductos from "./DetallesProductos";
import { Link } from "react-router-dom";

function Home (){
    return (
        <div className="items-center text-center h-1/4">
            <div className="w-auto px-12 lg:w-auto xl:h-screen xl:px-44 h-60 sm:h-96">
            <YoutubePlayer 
                url={"https://www.youtube.com/watch?v=3xIkaTuaMDc"} 
                playing={false} 
                volume={0.5} 
                width="100%"
                height="100%"
                controls
                style={{margin: "auto",
                        borderRadius: "20px",
                        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                        display: "block",
                        }}
            />
            </div>
            <h1 className="text-4xl font-bold py-7">¿Quién soy?</h1>
            <p className="px-20 py-3 text-sm md:text-base xl:px-72 md:px-20 lg:px-20">Hola. Soy Pato Turri, tengo 33 años y soy Argentino. Hace años que me 
                dedico a viajar por el mundo con mi cámara, documentando mis mejores momentos. La idea de viajar
                es conocer más allá de los lugares increíbles que visito, es de aprender de culturas diferentes, de 
                personas que son iguales a nosotros pero con costumbres diversas a las que conocemos y eso hace maravilloso 
                estos viajes. Te invito a que juntos aprendamos lo que es nuestro planeta de lo afortunados que somos. 
            </p>
            <Link to="/misfotos/1"><img src="/public/_10015962.jpg" alt="Budas" className="w-screen h-auto p-10 rounded-3xl"/></Link>
        </div>
    )
}

export default Home ;
