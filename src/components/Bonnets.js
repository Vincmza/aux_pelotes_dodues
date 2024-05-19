import {React, useEffect, useState} from "react"
//FIREBASE
import { txtDB } from "../backend/firebase"
import { collection, getDocs } from "firebase/firestore";

//METHODS
import { getPathToDB, getData, retrieveSubCollection } from "../backend/databaseMethods"

const Bonnets = ({products, collectionName})=>{
    //TO DO
    ///* GESTION DE L'AFFICHAGE POUR UNE ERREUR
    ///* GESTION AFFICHAGE POUR UN CHARGEMENT
    ///* REFACTORING
    const productId = "bonnets"
    //STATE POUR STOCKER LES BONNETS
    const [allBonnets, setAllBonnets]=useState([{id : "no data available"}])
    //RECUPERATION DES DONNEES
    const retrieveSubCollection = (products, collectionName, productId)=>{
        const currentPath = getPathToDB(products, collectionName, productId)
        if(currentPath != false){
            getData(currentPath)
            .then(res=>{
                setAllBonnets(res)
            })
            .catch(err=>{
                console.log(err)
            })
        }
        else{
            console.log("Bonnets ==> can't update the state 'pathToBDD'")
        }
    }
    console.log("lol ==> ", allBonnets)

    //RECUPERATION CHEMIN VERS LA BDD
    useEffect(()=>{
        retrieveSubCollection(products, collectionName, productId)
        
    },[products])
    
    return (
        <div>
            
        </div>
    )
}
export default Bonnets

