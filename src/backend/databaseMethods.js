//FIREBASE
import { txtDB } from "./firebase"
import { addDoc, collection, getDocs} from "firebase/firestore";

// export const handleNew = async ()=>{
//     const collectionref = collection(db,"bonnets")
//     //uuidv4(),"bonnets","double épaisseur","vert",true,"./assests/pictures/bonnets/bonnet.jpg"
//     const payload = { 
//       type : "bonnets", 
//       model : "neige edition", 
//       color :"marron",
//       isAvailable : true,
//       image : "./assests/pictures/bonnets/bonnet.jpg"
//     }
//     const docRef = await addDoc(collectionref, payload)
//     console.log("Nouvel objet créé : ", docRef.id)
// }
// export const editNew = async (id)=>{
//     console.log("L'id du produit : ", id)
// }
//RECUPERATION DU CHEMIN VERS LA SOUS COLELCTION
export const getPathToDB = (element, collectionName)=>{
  if(element){
    const path = `${collectionName+'/'+element?.id+'/data'}`
    return path
  }
  else{
    console.log("Aucun objet en paramètre")
    return false
  }  
}

export const getData = async (pathToBDD) =>{
  //console.log("Chemin dans getData ==> ", pathToBDD)
  const connection = collection(txtDB, pathToBDD)
  const dataDb = await getDocs(connection)
  const allData = dataDb.docs.map(val=>({...val.data(), id: val.id}))
  //console.log({connection, dataDb, allData, pathToBDD})
  return allData
}

    