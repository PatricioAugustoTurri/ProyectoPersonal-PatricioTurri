import { addDoc, collection, getFirestore } from "firebase/firestore";
import { app } from "./firebaseConfig";


const db = getFirestore(app)
const col = collection (db, "productos")

export const crearProducto = addDoc (col , {
    titulo: "Amigos",
    categoria: "" ,
    precio:"",
    imagen: "/public/_10015962.jpg",
})