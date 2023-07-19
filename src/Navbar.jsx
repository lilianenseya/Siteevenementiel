import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
    return(

        <div>    
    <nav className="link">
      
        <NavLink className="text-souligner" to ="/">Accueil</NavLink>
         
        <NavLink className="text-souligner"to ="/Apropos">Apropos</NavLink>
        
        <NavLink className="text-souligner"to ="/Contact">Contact</NavLink>
        
        <NavLink className="text-souligner" to ="/Services">Services</NavLink>
        
        <NavLink className="text-souligner" to ="/Shop">Shop</NavLink>

        <NavLink className="text-souligner"to ="/Galery">Galery</NavLink>

        <NavLink className="text-souligner"to ="/Rechercher">Rechercher</NavLink>
    </nav>
    </div>
  );
};

export default Navbar;

    
    

     