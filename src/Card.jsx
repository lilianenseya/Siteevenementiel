import React from 'react';
import { NavLink } from 'react-router-dom';

function Card({ title, date, location, description, imageUrl }) {
         return (

               
                <div className="event-card">

                    <div className='titre-niveau1'>
                      <h1>Créer des souvenirs inoubliables</h1>
                      <h2>Aimer, c'est aussi aimer son prochain.</h2>
                    </div>

                     <div className="event-card__content">
                  {/* <p className="event-card__date">{date}</p>
                 <p className="event-card__location">{location}</p>
                 <p className="event-card__description">{description}</p> */}

                 <div className='event_card_button'>
                 <NavLink to="/Portofolio">
                 <button className="event-card__btn1">Services</button>
                 </NavLink>
                 <NavLink to="/Contact ">
                 <button className="event-card__btn2">Nous contacter</button>
                 </NavLink>  

                 </div>
               </div>
               </div>    
  );
};

export default Card;
            
             
         