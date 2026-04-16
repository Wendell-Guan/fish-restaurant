import React from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language && i18n.language.startsWith('zh') ? 'en' : 'zh');
  };

  return (
    <header className="header container">
      <nav className="header-nav left-nav">
        <ul>
          <li><a href="#home">{t('nav.home')}</a></li>
          <li><a href="#prestations">{t('nav.services')}</a></li>
          <li><a href="#galerie">{t('nav.products')}</a></li>
        </ul>
      </nav>
      
      <div className="header-logo">
        <span className="logo-icon" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '900', fontSize: '1.2rem', color: 'var(--clr-bg-deep)' }}>
          <svg viewBox="0 0 100 100" width="40" height="40" style={{fill:"var(--clr-bg-deep)"}}>
            <circle cx="50" cy="50" r="45" fill="none" strokeWidth="2" stroke="currentColor"/>
            <text x="35" y="60" fontSize="30" >🐟</text>
          </svg>
          SuriCatch
        </span>
      </div>

      <nav className="header-nav right-nav">
        <ul>
          <li><a href="#avis">{t('nav.partners')}</a></li>
          <li><a href="#contact">{t('nav.contact')}</a></li>
          <li>
            <button onClick={toggleLanguage} style={{ background: 'transparent', border: '1px solid currentColor', borderRadius: '4px', color: 'inherit', padding: '0.2rem 0.5rem', cursor: 'pointer', marginLeft: '1rem', fontSize: '0.9em', fontWeight: 'bold' }}>
              {i18n.language && i18n.language.startsWith('zh') ? 'EN' : '中文'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
