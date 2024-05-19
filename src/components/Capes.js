import {React, useEffect, useState} from "react"
//FIREBASE
import { txtDB } from "../backend/firebase"
import { collection, getDocs } from "firebase/firestore";

//METHODS
import { getPathToDB } from "../backend/databaseMethods"

const Capes = ({products, collectionName})=>{
    console.log("Pages capes : ", typeof(products))
    const productId = "capes"
    //STATE POUR STOCKER LES BONNETS
    const [allCappes, setAllCapes]=useState([])
    //STATE CHEMIN VERS LA BDD
    const [pathToBDD, setPathToBDD]=useState("path not available yet")
    //RECUPERATION CHEMIN VERS LA BDD
    useEffect(()=>{
        const data = getPathToDB(products,collectionName, productId)
        if(data != false){
            setPathToBDD(data)
        }
        
    })
    
    return (
        <div >
            {products[0]?.id === "data not available yet" ? 
            (<h1>{products[0]?.id}</h1>)
            :
            (<h1>Chargement disponible : {products[0]?.id}</h1>)}
            <h2>Le chemin de ses morts : {pathToBDD}</h2>
        </div>
    )
}
export default Capes

