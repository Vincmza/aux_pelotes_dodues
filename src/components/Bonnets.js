import {React, useEffect, useState} from "react"
//FIREBASE
import { txtDB } from "../backend/firebase"
import { collection, getDocs } from "firebase/firestore";

const Bonnets = ({products, collectionName})=>{
    //STATE POUR STOCKER LES BONNETS
    const [allBonnets, setAllBonnets]=useState([])
    //STATE CHEMIN VERS LA BDD
    const [pathToBDD, setPathToBDD]=useState("path not available yet")
    //RECUPERATION CHEMIN VERS LA BDD
    const getPathToDB = ()=>{
        const filter = products.filter(item => item?.id === "bonnets")
        if(filter != []){
            const data = products[0]?.id
            const path = `${collectionName+'/'+data+'/data'}`
            setPathToBDD(path)
        }
        else{
            console.log("Error, data not available yet")
        }
    }
    useEffect(()=>{
        getPathToDB()
    })

    return (
        <div>
            {products[0]?.id === "data not available yet" ? 
            (<h1>{products[0]?.id}</h1>)
            :
            (<h1>Chargement disponible : {products[0]?.id}</h1>)}
            <h2>Le chemin de ses morts : {pathToBDD}</h2>

        </div>
    )
}
export default Bonnets

