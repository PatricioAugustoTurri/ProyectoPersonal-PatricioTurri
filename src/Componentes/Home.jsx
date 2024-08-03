import YoutubePlayer from "react-player/youtube";

function Home (){
    return (
        <div className="items-center text-center">
            <YoutubePlayer 
                url={"https://www.youtube.com/watch?v=3xIkaTuaMDc"} 
                playing={false} 
                volume={0.5}   
                controls
                width={1200}
                height={650}
                style={{margin: "auto",
                        borderRadius: "20px",
                        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                        display: "block",
                        }}
            />
            <h1 className="text-4xl font-bold py-7">¿Quién soy?</h1>
            <p className="py-3 text-base px-72">Hola. Soy Pato Turri, tengo 33 años y soy Argentino. Hace años que me 
                dedico a viajar por el mundo con mi cámara, documentando mis mejores momentos. La idea de viajar
                es conocer más allá de los lugares increíbles, es de aprender de culturas diferentes, de personas que son iguales 
                a nosotros pero con costumbres diversas a las que conocemos y eso hace maravilloso estos viajes. 
                Te invito a que juntos aprendamos lo que es nuestro planeta de lo afortunados que somos. 
            </p>
            <img src="/public/_10015962.jpg" alt="Budas" className="w-screen h-auto p-10 rounded-3xl" />
        </div>
    )
}

export default Home ;
