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
import { addDoc, collection, doc, getDocs, query, where, onSnapshot, collectionGroup} from "firebase/firestore";

//METHODS
import { handleNew } from "./backend/databaseMethods";
import { editNew } from "./backend/databaseMethods";

function App(){
  //CONNEXION A LA BDD
  const docRef = collection(txtDB,"products")
  // STATE DES DONNEES DEJA PRESENTES SUR LA BDD
  const [products, setProducts]=useState([])
  // STATE DE TOUS LES PRODUITS
  const [allProducts, setAllProducts]=useState([])

  //RECUPERATION ET STOCKAGE DES COLLECTIONS DES CLES
  //RECUPEREES PRECEDEMMENT
  const getAllItems = async(product)=>{
      const id = product.id
      const productRef = collection(txtDB, `products/${id}/data`)
      const productDataDB = await getDocs(productRef)
      const allItems = productDataDB.docs.map(val=>({...val.data(), id: val.id}))
      setAllProducts(previousState => [...previousState, allItems])
  }

  //RECUPERATION ET STOCKAGE DES CLES DES DIFFERENTES COLLECTIONS
  const getData = async () =>{
    try{
      const dataDb = await getDocs(docRef)
      const allData = dataDb.docs.map(val=>({...val.data(), id: val.id}))
      setProducts(allData)
      setAllProducts([])
      products.forEach(product=>{
        getAllItems(product)
      })
    }
    catch(error){
      console.log("ERROR ==> ", error)
    }
  }
  
  useEffect(()=>{
    getData()
  },[])
  
  //console.log("DATA = ", products)
  //console.log("ALL PRODUCTS ==> ", allProducts)
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
