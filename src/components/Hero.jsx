import React from 'react';
import Header from './Header';
import { useTranslation } from 'react-i18next';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="hero-section" id="home">
      <div className="hero-bg-top"></div>
      <Header />
      
      <div className="hero-content container">
        <div className="hero-text">
          <p className="hero-subtitle">{t('hero.subtitle')}</p>
          <h1 className="hero-title" style={{ whiteSpace: 'pre-line' }}>{t('hero.title')}</h1>
          <div className="hero-buttons">
            <a href="#products" className="btn btn-primary">{t('hero.btnProducts')}</a>
            <a href="#contact" className="btn btn-secondary">{t('hero.btnContact')}</a>
          </div>
        </div>
        
        <div className="hero-images">
          <img src="/assets/images/hero_jumping_fish.png" alt="Jumping fish" className="hero-fish-img" />
        </div>
      </div>
      
      <div className="hero-bottom container">
        <div className="hero-plate">
          <img src="/assets/images/hero_fish_plate.png" alt="Raw fish on ice" className="plate-img" />
        </div>
        <div className="hero-description">
          <h3>{t('hero.descTitle')}</h3>
          <h2 style={{ whiteSpace: 'pre-line' }}>{t('hero.descSubtitle')}</h2>
          <p>{t('hero.descP1')}</p>
          <p>{t('hero.descP2')}</p>
          <a href="#products" className="btn btn-secondary">{t('hero.btnCatalog')}</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
