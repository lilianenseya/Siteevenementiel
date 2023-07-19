import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
 import Location from "./Location";

function Services(){
    return(
        <div>
        <Navbar/>

        <p className="p">MARIAGE</p>
         

        <div className="Evenement">
            <div className="BGG">
            <img className="portfolio" src="salle-restaurant.jpg" alt=""/>
             <h6 className="titre6">Prestation complète</h6>
        <p className="p_titre">
        Paragraphe. Cliquez ici pour ajouter votre propre texte. 
        Utilisez cet espace pour relater votre parcours 
        et présenter votre activité à vos visiteurs.</p>
        </div>

          <div className="BGG">
            <img className="portfolio" src="imn.jpeg" alt=""/>
            <h6 className="titre6"> Prestation partielle</h6>
            <p className="p_titre">
            Paragraphe. Cliquez ici pour ajouter votre propre texte. 
            Utilisez cet espace pour relater votre parcours 
            et présenter votre activité à vos visiteurs.
            </p>
            </div>
            <div className="BGG">
           <img className="portfolio" src="mariage.jpg" alt=""/>
           <h6 className="titre6">Le jour J</h6>
           <p className="p_titre">
           Paragraphe. Cliquez ici pour ajouter votre propre texte. 
           Utilisez cet espace pour relater votre parcours 
          et présenter votre activité à vos visiteurs
          </p>
          </div>
           </div>
           <p className="p">FÊTES PRIVÉES</p>
         

        <div className="Evenement">
            <div className="BGG">
            <img className="portfolio" src="bapteme.jpg" alt=""/>
             <h6 className="titre6">Baptême</h6>
        <p className="p_titre">
           Paragraphe. Cliquez ici pour ajouter votre propre texte. 
           Utilisez cet espace pour relater votre parcours 
           et présenter votre activité à vos visiteurs.</p>
        </div>

          <div className="BGG">
            <img className="portfolio" src="buffet.jpg" alt=""/>
            <h6 className="titre6"> Bar Mitzvahs</h6>
            <p className="p_titre">
            Paragraphe. Cliquez ici pour ajouter votre propre texte. 
            Utilisez cet espace pour relater votre parcours 
            et présenter votre activité à vos visiteurs.
            </p>
            </div>
            <div className="BGG">
           <img className="portfolio" src="femme-tenantt.jpg" alt=""/>
           <h6 className="titre6">Événements privés</h6>
           <p className="p_titre">
           Paragraphe. Cliquez ici pour ajouter votre propre texte. 
            Utilisez cet espace pour relater votre parcours 
           et présenter votre activité à vos visiteurs.
          </p>
          </div>
           </div>
           <p className="p">EVÉNEMENTS DIVERS</p>
         

        <div className="Evenement">
            <div className="BGG">
            <img className="portfolio" src="conf.jpg" alt=""/>
             <h6 className="titre6">Conférences</h6>
        <p className="p_titre">
           Paragraphe. Cliquez ici pour ajouter votre propre texte. 
           Utilisez cet espace pour relater votre parcours 
           et présenter votre activité à vos visiteurs.</p>
        </div>

          <div className="BGG">
            <img className="portfolio" src="reunion.jpg" alt=""/>
            <h6 className="titre6">  Fêtes d'entreprise</h6>
            <p className="p_titre">
            Paragraphe. Cliquez ici pour ajouter votre propre texte. 
            Utilisez cet espace pour relater votre parcours 
            et présenter votre activité à vos visiteurs.
            </p>
            </div>
            <div>
            <div className="BGG">
           <img className="portfolio" src="seminaireloisir.jpg" alt=""/>
           <h6 className="titre6"> Séminaires de loisirs</h6>
           <p className="p_titre">
           Paragraphe. Cliquez ici pour ajouter votre propre texte. 
            Utilisez cet espace pour relater votre parcours 
           et présenter votre activité à vos visiteurs.
          </p>
          </div>
          </div>
           </div>
          <div>
          <NavLink to="/Location">
                 <button className="event-card__btn4">Prendre rendez-vous</button>
                 </NavLink> 
          </div>
          
          
        </div>

    )
}
export default Services;