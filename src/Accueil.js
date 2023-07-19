import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Contenu from "./Contenu";
import Photo from "./Photo";
import  Forme from "./Forme";
import Categorie from"./Categorie";
import Texte from "./Texte";
import Formel from "./Formel";



function Accuiel(){
    return(
        <div>
            <Navbar/>
            <Card/> 
            <Contenu/>
            <Photo/>
            <Forme/>
            <Categorie/>
            <Texte/>
            <Formel/>
            
        </div>
      

    )
}
export default Accuiel;