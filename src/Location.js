import React from "react";
import Services from "./Services";
import Navbar from "./Navbar";
import { useState } from "react";
 


  

function Location(){
 const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const handleSubmit = (e) =>{
    e.preventDefault()

    // Validation des données avant la soumission


    if (!fullName || !email || !phone || !date || !time) { 
      alert('Veuillez remplir tous les champs.') 
      
    
    }
    // Envoyer les données à un service de prise de rendez-vous ou effectuer une autre action

    // Réinitialiser le formulaire
    setFullName('');
    setEmail('');
    setPhone('');
    setDate('');
    setTime('');
  };
    return (
        <div>
        <Navbar/>
  
  <div className="">
    <form onSubmit={handleSubmit}>
      <label className="formloc"><br></br>
        Nom complet:
        <input className="location"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        /><br></br>
      </label>
      <br />
      <label className="formloc" >
        Email:
        <input className="location"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label className="formloc">
        Téléphone:
        <input className="location"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <br />
      <label className="formloc">
        Date:
        <input className="location"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <br />
      <label className="formloc">
        Heure:
        <input className="location"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </label>
      <br/>
      <button type="submit">Prendre rendez-vous</button>
    </form>
    </div>
</div>
);
 }
   export default Location;