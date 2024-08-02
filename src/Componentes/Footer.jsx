import { Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

function Footer (){
    return (
        <footer className="py-12 text-xs bg-stone-800">
            <div className="flex items-center justify-center gap-4 py-4 text-white">
                <a href="https://www.youtube.com/channel/UCGW3U0Tb5KXtq9BdS-9vuKg"><Youtube size={50}/></a>
                <a href="https://www.instagram.com/soymigrante_/"><Instagram size={40}/></a>
            </div>
            <div className="flex items-center justify-center gap-5 py-4 text-white">
                <Link to="/">INICIO</Link>
                <Link to="/preset">PRESET</Link>
                <Link to="/contacto">CONTACTO</Link>
                <Link to="/porfolio">PORFOLIO</Link>
            </div>
        </footer>
    )
}

export default Footer ;
