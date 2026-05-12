import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from './Header';
import Footer from './Footer';
import './About.css';

const About = () => {
  const { t } = useTranslation();
  const pillars = t('about.pillars', { returnObjects: true });

  return (
    <div className="about-page">
      <div className="about-hero-bg"></div>
      <Header />

      <section className="about-intro container">
        <p className="about-eyebrow">{t('about.eyebrow')}</p>
        <h1 className="about-title" style={{ whiteSpace: 'pre-line' }}>{t('about.title')}</h1>
        <p className="about-subtitle">{t('about.subtitle')}</p>
      </section>

      <main className="about-main">
        <section className="about-section container">
          <header className="about-section-header">
            <h2 className="about-section-title">{t('about.storyTitle')}</h2>
          </header>
          <p className="about-story-body">{t('about.storyBody')}</p>
        </section>

        <section className="about-section container">
          <header className="about-section-header">
            <h2 className="about-section-title">{t('about.videoTitle')}</h2>
          </header>
          <div className="about-video">
            <iframe
              src="https://www.youtube-nocookie.com/embed/SjQW02hrQZo"
              title="SuriCatch — Inside Our Operations"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section className="about-section container">
          <header className="about-section-header">
            <h2 className="about-section-title">{t('about.pillarsTitle')}</h2>
          </header>
          <div className="pillars-grid">
            {pillars.map((p, i) => (
              <article key={i} className="pillar-card">
                <h3 className="pillar-title">{p.title}</h3>
                <p className="pillar-desc">{p.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="container">
          <div className="about-cta">
            <h3>{t('about.ctaTitle')}</h3>
            <p>{t('about.ctaDesc')}</p>
            <a href="#contact" className="btn btn-secondary">{t('about.ctaBtn')}</a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
