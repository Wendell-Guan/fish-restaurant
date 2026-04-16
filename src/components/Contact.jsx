import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container contact-container">
        <div className="contact-form-side">
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Nom" />
              <input type="text" placeholder="Prénom" />
            </div>
            <div className="form-row">
              <input type="email" placeholder="E-mail" />
              <input type="tel" placeholder="Téléphone" />
            </div>
            <div className="form-row form-full-row">
              <input type="text" placeholder="Sujet" />
            </div>
            <div className="form-row form-full-row">
              <textarea placeholder="Message" rows="5"></textarea>
            </div>
            <div className="form-checkbox">
              <input type="checkbox" id="policy" />
              <label htmlFor="policy">En soumettant ce formulaire, j'accepte la politique de confidentialité.</label>
            </div>
            <button type="submit" className="btn btn-secondary">Envoyer</button>
          </form>
        </div>
        
        <div className="contact-info-side">
          <h3>CONTACTEZ-NOUS</h3>
          <div className="info-item">
            <span className="icon">📞</span>
            <p><strong>Téléphone</strong><br/>+1 (234) 567 89 00</p>
          </div>
          <div className="info-item">
            <span className="icon">✉️</span>
            <p><strong>E-mail</strong><br/>contact@fishrestaurant.com</p>
          </div>
          <div className="info-item">
            <span className="icon">📍</span>
            <p><strong>Adresse</strong><br/>123 Rue de la Mer, Oceanville</p>
          </div>
          
          <div className="contact-image-wrap">
            <img src="/assets/images/footer_school.png" alt="Map/Texture" className="contact-texture" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
