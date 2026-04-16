import React from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section className="section" id="contact">
      <div className="container contact-container">
        <div className="contact-form-side">
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder={t('contact.placeholderCompany')} />
              <input type="text" placeholder={t('contact.placeholderPerson')} />
            </div>
            <div className="form-row">
              <input type="email" placeholder={t('contact.placeholderEmail')} />
              <input type="tel" placeholder={t('contact.placeholderPhone')} />
            </div>
            <div className="form-row form-full-row">
              <input type="text" placeholder={t('contact.placeholderInquiry')} />
            </div>
            <div className="form-row form-full-row">
              <textarea placeholder={t('contact.placeholderMessage')} rows="5"></textarea>
            </div>
            <div className="form-checkbox">
              <input type="checkbox" id="policy" />
              <label htmlFor="policy">{t('contact.policy')}</label>
            </div>
            <button type="submit" className="btn btn-secondary">{t('contact.btnSubmit')}</button>
          </form>
        </div>
        
        <div className="contact-info-side">
          <h3>{t('contact.title')}</h3>
          <div className="info-item">
            <span className="icon">📞</span>
            <p><strong>{t('contact.opTitle')}</strong><br/>+597 123 4567</p>
          </div>
          <div className="info-item">
            <span className="icon">✉️</span>
            <p><strong>{t('contact.salesTitle')}</strong><br/>export@suricatch.sr</p>
          </div>
          <div className="info-item">
            <span className="icon">📍</span>
            <p><strong>{t('contact.hqTitle')}</strong><br/>123 Port Harbor, Paramaribo, Suriname</p>
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
