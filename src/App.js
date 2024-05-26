import {React, useEffect, useState} from "react"
// COMPOSANTS
import HeaderMenus from "./components/Header/HeaderMenus";
import HeaderProject from "./components/Header/HeaderProject";
import Products from "./pages/Products/Products";
import Contact from "./pages/Contact/Contact";
import Team from "./pages/Team";
import Footer from "./components/Footer";
import StoreTxtAndImage from "./backend/StoreTxtAndImage";
import Bonnets from "./components/Bonnets";
import Capes from "./components/Capes";
// ROUTER
import { BrowserRouter, Routes, Route} from "react-router-dom";

//FIREBASE
import { txtDB } from "./backend/firebase"
import { addDoc, collection, doc, getDocs} from "firebase/firestore";

//METHODS
import { handleNew } from "./backend/databaseMethods";
import { editNew } from "./backend/databaseMethods";


function App(){
  const collectionName = "products"
  //CONNEXION A LA BDD
  const docRef = collection(txtDB, collectionName)
  //STATE DES DONNEES DEJA PRESENTES SUR LA BDD
  const [products, setProducts]=useState([{id : "data not available yet"}])
  
  //RECUPERATION ET STOCKAGE DES CLES DES DIFFERENTES COLLECTIONS
  const getData = async () =>{
    const dataDb = await getDocs(docRef)
    const allData = dataDb.docs.map(val=>({...val.data(), id: val.id}))
    setProducts(allData)
  }
  useEffect(()=>{
      getData()
  },[])
  console.log("Produits dans App : ", products)
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StoreTxtAndImage/>}/> 
          <Route path="/bonnets" element={<Bonnets products={products} collectionName={collectionName}/>}/>
          <Route path="/capes" element={<Capes products={products} collectionName={collectionName}/>}/>
        </Routes>

        {/* <HeaderProject/>
        <HeaderMenus/>
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
