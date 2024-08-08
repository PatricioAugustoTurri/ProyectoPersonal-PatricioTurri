import { collection, getFirestore } from "firebase/firestore";
import { app } from "../firebaseConfig";

const db = getFirestore(app);
const misProductos = collection (db, "productos");

function Productos (){
    
}

export default Productos ;
