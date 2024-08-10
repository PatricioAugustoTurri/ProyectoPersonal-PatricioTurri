import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "./firebaseConfig";


const db = getFirestore(app)
const col = collection (db, "productos")
const personal = collection (db, "personal")

export function crearProducto () {
    const consulta = addDoc(col, {
        titulo:"",
        descripcion:"",
        precio:"",
        imagen:"",
        categoria:"",
    })
}

export function getProductos () {
    return getDocs(col)
    .then((res)=>{
            const productos = res.docs.map((doc)=>{
            const producto = doc.data()
            console.log(producto)
            return producto
        })
        console.log(productos)
        return productos
    })
    .catch((err)=>{
        return err
    })
}

export function getYo () {
    return getDocs(personal)
    .then ((res)=> {
        const yo = res.docs.map((doc)=>{
            const y = doc.data()
            console.log(y)
            return y
        })
        console.log(yo)
        return yo
    })
    .catch((err)=>{
        return err
    })
}