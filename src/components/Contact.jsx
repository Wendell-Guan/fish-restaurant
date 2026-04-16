import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container contact-container">
        <div className="contact-form-side">
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Company Name" />
              <input type="text" placeholder="Contact Person" />
            </div>
            <div className="form-row">
              <input type="email" placeholder="Business E-mail" />
              <input type="tel" placeholder="Phone Number" />
            </div>
            <div className="form-row form-full-row">
              <input type="text" placeholder="Order Inquiry (e.g. 5 Tonnes Red Snapper)" />
            </div>
            <div className="form-row form-full-row">
              <textarea placeholder="Message / Specifications" rows="5"></textarea>
            </div>
            <div className="form-checkbox">
              <input type="checkbox" id="policy" />
              <label htmlFor="policy">I agree to the B2B terms and privacy policy.</label>
            </div>
            <button type="submit" className="btn btn-secondary">Request Quote</button>
          </form>
        </div>
        
        <div className="contact-info-side">
          <h3>BECOME A PARTNER</h3>
          <div className="info-item">
            <span className="icon">📞</span>
            <p><strong>Export Operations</strong><br/>+597 123 4567</p>
          </div>
          <div className="info-item">
            <span className="icon">✉️</span>
            <p><strong>Global Sales</strong><br/>export@suricatch.sr</p>
          </div>
          <div className="info-item">
            <span className="icon">📍</span>
            <p><strong>Headquarters</strong><br/>123 Port Harbor, Paramaribo, Suriname</p>
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
