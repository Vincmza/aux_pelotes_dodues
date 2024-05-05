import {React, useEffect, useState} from "react"
// COMPOSANTS
import HeaderMenus from "./components/Header/HeaderMenus";
import HeaderProject from "./components/Header/HeaderProject";
import Products from "./pages/Products/Products";
import Contact from "./pages/Contact/Contact";
import Team from "./pages/Team";
import Footer from "./components/Footer";
import Test from "./components/Test";
import StoreTxtAndImage from "./backend/StoreTxtAndImage";
// ROUTER
import { BrowserRouter, Routes, Route} from "react-router-dom";

//FIREBASE
import db from "./backend/firebase"
import { collection, onSnapshot } from "firebase/firestore";

//METHODS
import { handleNew } from "./backend/databaseMethods";
import { editNew } from "./backend/databaseMethods";



function App(){
  // STATE RASSEMBLANT LES ITEMS A AFFICHER
  const [bonnets, setBonnets]= useState([])
  //console.log("CHECK bonnets State : ", bonnets)
  // RECUPERATION DES PRODUITS AVEC USE EFFECT
  // MISE A JOUR DU STATE
  useEffect(()=>{
    onSnapshot(collection(db,"bonnets"), (snapshot)=>{
      setBonnets(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
    })
  },[])

  return (
    <div className="App">
      <StoreTxtAndImage/>
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
