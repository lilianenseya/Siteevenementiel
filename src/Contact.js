  import React, { useState } from 'react';
  import Navbar from './Navbar';



function ContactForm(){
     
      
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [message, setMessage] = useState('');
      const [showPopup, setShowPopup] = useState(false);
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Envoyer les données du formulaire à l'API ou au backend
    
        // Réinitialiser les champs du formulaire
        setName('');
        setEmail('');
        setMessage('');
    
        // Afficher la boîte de dialogue
        setShowPopup(true);
      };
    
      return (
        <div>
          <Navbar/>
          <h5 className='titre_form'>Contactez-nous</h5>
          <form onSubmit={handleSubmit}>
            <div className='form'>
              <label>Nom :</label><br></br>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className='form'>
              <label>Email :</label><br></br>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='form'>
              <label >Message :</label><br></br>
              <textarea
              cols={60}
              rows={10}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button className="soumettre" type="submit">Envoyer</button><br></br>
          </form>
            </div>
          )
    };
    
    export default ContactForm;
         