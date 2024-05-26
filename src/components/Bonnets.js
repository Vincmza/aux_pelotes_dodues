import {React, useEffect, useState} from "react"
//FIREBASE
import { txtDB } from "../backend/firebase"
import { collection, getDocs } from "firebase/firestore";

//METHODS
import { getPathToDB, getData, retrieveSubCollection } from "../backend/databaseMethods"

const Bonnets = ({products, collectionName})=>{
    
    const [isFetching, setIsFetching] = useState(true)
    const [allData, setAllData]= useState([{id : "no data available yet"}])
    //RECUPERATION DES DONNEES
    const buildPath = ()=>{
        const data = []
        products.forEach(element=>{
            data.push({name : element.id, path : getPathToDB(element, collectionName)})
        })
        return data
    }
    //RECUPERATION CHEMIN VERS LA BDD
    useEffect(()=>{
        const fetchData = async (path) => {
            try {
                setIsFetching(true)
                const result = await getData(path, collectionName)
                setAllData(pv=>[...pv, result])
            } catch (err) {
                console.error(err.message)
            } finally {
                setIsFetching(false)
            }
        }
        const allPaths = buildPath()
        setAllData([])
        allPaths.forEach(element=>{
            fetchData(element.path)
        })
        
        
    },[products])
    console.log("state des données : ", allData)
    return (
        <div>
            {isFetching === true && <h1>Chargement...</h1>}
            {isFetching === false && 
            <>
                {allData[1]?.map(item=>(
                    <ul key={item.id}>
                        <li>{item.id}</li>
                        <li>{item.price}</li>
                        <li>{item.color}</li>
                    </ul>
                ))}
            </>}
        </div>
    )
}
export default Bonnets

