import {React, useEffect, useState} from "react"
// COMPOSANTS
import HeaderMenus from "./components/Header/HeaderMenus";
import HeaderProject from "./components/Header/HeaderProject";
import Products from "./pages/Products/Products";
import Contact from "./pages/Contact/Contact";
import Team from "./pages/Team";
import Footer from "./components/Footer";
import StoreTxtAndImage from "./backend/StoreTxtAndImage";
// ROUTER
import { BrowserRouter, Routes, Route} from "react-router-dom";

//FIREBASE
import { txtDB } from "./backend/firebase"
import { addDoc, collection, getDocs } from "firebase/firestore";

//METHODS
import { handleNew } from "./backend/databaseMethods";
import { editNew } from "./backend/databaseMethods";

function App(){

  const allCollections = {
    bonnets:"bonnets",
    châles:"châles",
    capes:"capes",
    écharpes:"écharpes"
  }
  const collectionKeys = Object.keys(allCollections)

  // STATE DES DONNEES DEJA PRESENTES SUR LA BDD
  const [bonnets, set_bonnets]= useState([])
  const [châles, set_châles]= useState([])
  const [écharpes, set_écharpes]=useState([])
  const [capes, set_capes]=useState([])

  const organizeAllProducts = ()=>{
    //1 - Implémenter plus de collections dans firebase
    //2- concaténer les states dans un seul tableau
    //3 - Automatiser cette 2eme tâche avec une boucle
    const array = bonnets.concat(châles)
    console.log(array)
    return array
  }
  // ON RECUPERE LES DONNES 
  // ON MET A JOUR LES STATES
  const getData = async (collectionName) =>{
    try{
      const docRef = collection(txtDB,collectionName)
      const dataDb = await getDocs(docRef)
      const allData = dataDb.docs.map(val=>({...val.data(), id: val.id}))
      switch(collectionName){
        case "bonnets":
          set_bonnets(allData)
          break
        case "châles":
          set_châles(allData)
        default:
          console.log("all is ok")
      }
    }
    catch(error){
      console.log("ERROR ==> ", error)
    }
    
  }
  useEffect(()=>{
    collectionKeys.forEach(collectionName=>{
      getData(collectionName)
    })
  },[])
  console.log(organizeAllProducts())
  return (
    <div className="App">
      <StoreTxtAndImage data={organizeAllProducts()}/>
      <BrowserRouter>
        {/* <HeaderProject/>
        <HeaderMenus/>
        <div 
        style={{display:"flex",justifyContent:"center", marginTop: "10px"}}>
          <button 
          style={{padding:"10px"}}
          onClick={editNew}>
            EDIT
          </button>
        </div>
        <Test/>
        <Routes>
          <Route path="/" element={<Products/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/contact_us" element={<Contact/>}/>
          <Route path="/team" element={<Team/>}/> 
        </Routes>
        <Footer/> */}
      </BrowserRouter>
    </div>
  )
};
export default App
