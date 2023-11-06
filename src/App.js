import * as React from "react";
// COMPOSANTS
import HeaderMenus from "./components/Header/HeaderMenus";
import HeaderProject from "./components/Header/HeaderProject";
// ROUTER
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HeaderProject/>
      <HeaderMenus/>
      {/* <BrowserRouter>
        <Routes>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
