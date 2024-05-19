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
export const getPathToDB = (products, collectionName, productId)=>{
  //console.log({products, collectionName, productId})
  const filter = products.filter(item => item?.id === productId)
  if(filter.length > 0){
      const currentProduct = filter[0]?.id
      const path = `${collectionName+'/'+currentProduct+'/data'}`
      console.log("FILTER = ", filter)
      console.log("PATH = ", path)
      return path
  }
  else{
      console.log("Error, data not available yet")
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
// export const retrieveSubCollection = (products, collectionName, productId)=>{
//   console.log({products, collectionName, productId})
//   const currentPath = getPathToDB(products, collectionName, productId)
//   if(currentPath != false){
//       getData(currentPath)
//       .then(res=>{
//           console.log("Réponse : ", res)
//           return res
//       })
//       .catch(err=>{
//           console.log(err)
//       })
//   }
//   else{
//       console.log("Bonnets ==> can't update the state 'pathToBDD'")
//   }
// }
    