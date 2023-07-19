import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./App.css"
import Accuiel from "./Accueil";
import Apropos from "./Apropos";
import Contact from "./Contact";
import Services from "./Services";
import Shop from "./Shop";
import Galery from "./Galery";
import Location from "./Location";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
        
          <Route path="/" element={<Accuiel />}></Route>
          <Route path="/Apropos" element={<Apropos />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Services" element={<Services/>}></Route>
          <Route path="/Shop" element={<Shop />}></Route>
          <Route path="/Galery" element={<Galery />}></Route>
          <Route path="/Location" element={<Location />}></Route>

          
           </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
