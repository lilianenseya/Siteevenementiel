import React from "react";
import { NavLink } from "react-router-dom";
 
function Formel(){
       return(
        <div className="contenair">
            <div >      
           <img className="ddd"  src="belle-fem.jpg" alt=""/>
           <NavLink to="/Prix ">
                 <button className="event-card__btn3">J'ai besoin de prix</button>
                 </NavLink>  
           </div>

           <div>
            <img className="ddd"src ="salle-restaurant.jpg"  alt =""/>
             <NavLink to="/Prix ">
                 <button className="event-card__btn3">J'ai besoin de prix</button>
                 </NavLink> 
           </div>

           <div>
            <img className="ddd" src ="telephone.jpg"  alt =""/>
            
            <NavLink to="/Prix ">
                 <button className="event-card__btn3">J'ai besoin de prix</button>
                 </NavLink>  

           </div> 
            
        </div>
 )


}
export default Formel;