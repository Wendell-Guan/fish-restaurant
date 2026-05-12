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
          <li><a href="#products">{t('nav.products')}</a></li>
        </ul>
      </nav>
      
      <div className="header-logo" style={{ userSelect: 'none', margin: '0 3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1.1 }}>
        <div style={{ display: 'flex', alignItems: 'center', fontWeight: '900', fontSize: '1.8rem', color: 'var(--clr-bg-deep)', letterSpacing: '-0.02em' }}>
          Suri<span style={{ color: 'var(--clr-accent)', fontWeight: 400 }}>Catch</span>
        </div>
        {i18n.language && i18n.language.startsWith('zh') && (
          <div style={{ fontSize: '0.62rem', letterSpacing: '0.08em', color: 'var(--clr-bg-deep)', opacity: 0.72, marginTop: '5px', fontWeight: 600, whiteSpace: 'nowrap' }}>
            {t('footer.legalName')}
          </div>
        )}
      </div>

      <nav className="header-nav right-nav" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '2rem' }}>
        <ul style={{ margin: 0, padding: 0 }}>
          <li><a href="#avis">{t('nav.partners')}</a></li>
          <li><a href="#contact">{t('nav.contact')}</a></li>
        </ul>
        
        {/* Highly Visible Language Switcher Pill */}
        <button 
          onClick={toggleLanguage} 
          style={{ 
            background: 'var(--clr-accent)', 
            border: 'none', 
            borderRadius: '20px', 
            color: 'var(--clr-bg-deep)', 
            padding: '0.4rem 0.8rem', 
            cursor: 'pointer', 
            fontSize: '0.85rem', 
            fontWeight: 'bold',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            whiteSpace: 'nowrap'
          }}
        >
          {i18n.language && i18n.language.startsWith('zh') ? (
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> EN
            </span>
          ) : (
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> 中文
            </span>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
