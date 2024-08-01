import { Link } from "react-router-dom";

function Footer (){
    return (
        <footer className="text-base bg-slate-800">
            <div className="flex items-center justify-center gap-4 py-5 text-white">
                <Link to="/">Home</Link>
                <a href="https://www.youtube.com/channel/UCGW3U0Tb5KXtq9BdS-9vuKg">YouTube</a>
                <a href="https://www.instagram.com/soymigrante_/">Instagram</a>
            </div>
        </footer>
    )
}

export default Footer ;