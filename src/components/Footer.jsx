import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <span className="logo-text">{t('footer.logo')}</span>
        </div>
        
        <div className="footer-links">
          <ul>
            <li><a href="#home">{t('nav.home')}</a></li>
            <li><a href="#prestations">{t('nav.services')}</a></li>
            <li><a href="#avis">{t('nav.partners')}</a></li>
          </ul>
          <ul>
            <li><a href="#contact">{t('nav.contact')}</a></li>
          </ul>
        </div>
        
        <div className="footer-social">
          <p>{t('footer.follow')}</p>
          <div className="social-icons">
            <a href="#">📱</a>
            <a href="#">📸</a>
          </div>
        </div>
        
        <div className="footer-bottom-logo">
          <span className="logo-icon-large">🦈</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
