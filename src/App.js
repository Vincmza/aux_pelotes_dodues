import * as React from "react";
// COMPOSANTS
import HeaderMenus from "./components/Header/HeaderMenus";
import HeaderProject from "./components/Header/HeaderProject";
import News from "./pages/News";
import Products from "./pages/Products";
import Contact from "./pages/Contact/Contact";
import Team from "./pages/Team";
import Footer from "./components/Footer";
// ROUTER
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderProject/>
        <HeaderMenus/>
        <Routes>
          <Route path="/news" element={<News/>}/>
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
