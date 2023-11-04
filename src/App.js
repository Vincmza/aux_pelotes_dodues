import * as React from "react";
// COMPOSANTS
import Header from "./components/Header/Header";
// ROUTER
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
