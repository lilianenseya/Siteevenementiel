import React from "react";
import Navbar from "./Navbar";

function Shop(){
    return(
        <div>
        <Navbar/>
        <div className="shop">
        <img  className="telephone"src="telephone.jpg" alt=""/>
        <img  className="femme-sacs" src="femme-sacs.jpg" alt=""/>
        </div>
        </div>

    )
}
export default Shop;