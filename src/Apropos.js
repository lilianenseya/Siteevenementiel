import React from "react";
import{NavLink} from'react-router-dom';
import Card from "./Card";
import Navbar from "./Navbar";

 

function Apropos(){
    return(
        <div>
            <Navbar/>
        
            <div className="about">
                <div> 
                    <img className="cadre" src="jeunefille.jpg" alt=""/>
                </div>
                <div className="sous-section">

                    <div>
                        <h3 className ="titre_niveau3"> À propos</h3>
                        <h4 className="titre_quatre">Qui sommes-nous et ce que nous faisons ?</h4>
                    </div>

                    <p className="paragraphe">
                        Nous sommes spécialisé dans la photographie professionnelle, avec une forte compétence et expérience, on se
                        permet de vous offrir un large éventail de services de prises de vues et créations originales destinées à mettre
                        en valeur vos événements personnels et professionnels tels que dans la photographie de mariage, portrait,
                        photo studio, nature, de famille, animalier, artistique, nude, photo manipulation, fashion, événement, reportage
                        d’entreprise et tant d’autres
                    </p>
                <div>
                    
                <NavLink to="/">
                    <button className="bouton">Lire plus</button>
                </NavLink>
            </div>
        </div>
        </div>
        </div>

    )
}
export default Apropos;