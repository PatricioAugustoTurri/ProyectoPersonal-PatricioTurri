import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "./firebaseConfig";


const db = getFirestore(app)
const col = collection (db, "productos")

export function crearProducto (){
    const consulta = addDoc(col, {
        titulo:"",
        descripcion:"",
        precio:"",
        imagen:"",
        categoria:"",
    })
}

export function getProductos (){
    const consulta = getDocs(col)
    consulta.then((res)=>{
        const productos = res.docs.map((doc)=>{
            const producto = doc.data()
            return producto
        })
        console.log(productos)
    })
}