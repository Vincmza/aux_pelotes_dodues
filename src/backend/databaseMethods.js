//FIREBASE
import db from "./firebase"
import { addDoc, collection} from "firebase/firestore";

export const handleNew = async ()=>{
    const collectionref = collection(db,"bonnets")
    //uuidv4(),"bonnets","double épaisseur","vert",true,"./assests/pictures/bonnets/bonnet.jpg"
    const payload = { 
      type : "bonnets", 
      model : "neige edition", 
      color :"marron",
      isAvailable : true,
      image : "./assests/pictures/bonnets/bonnet.jpg"
    }
    const docRef = await addDoc(collectionref, payload)
    console.log("Nouvel objet créé : ", docRef.id)
}

export const editNew = async (id)=>{
    console.log("L'id du produit : ", id)
}