import {React, useEffect, useState} from "react"
// COMPOSANTS
import HeaderMenus from "./components/Header/HeaderMenus";
import HeaderProject from "./components/Header/HeaderProject";
import News from "./pages/News";
import Products from "./pages/Products/Products";
import Contact from "./pages/Contact/Contact";
import Team from "./pages/Team";
import Footer from "./components/Footer";
// ROUTER
import { BrowserRouter, Routes, Route} from "react-router-dom";

//FIREBASE
import db from "./backend/firebase"
import { collection, onSnapshot } from "firebase/firestore";

function App() {
  // STATE RASSEMBLANT LES ITEMS A AFFICHER
  const [items, setItems]= useState([])
  console.log("CHECK items State : ", items)

  // RECUPERATION DES DONNEES AVEC USE EFFECT
  // MISE A JOUR DU STATE
  useEffect(()=>{
    onSnapshot(collection(db,"items"),(snapshot)=>{
        setItems(snapshot.docs.map(doc => doc.data()))
    })
  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <HeaderProject/>
        <HeaderMenus/>
        <Routes>
          {/* <Route path="/news" element={<News/>}/> */}
          <Route path="/products" element={<Products/>}/>
          <Route path="/contact_us" element={<Contact/>}/>
          <Route path="/team" element={<Team/>}/> 
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
