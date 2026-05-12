import React from 'react';
import { useTranslation } from 'react-i18next';
import './HomeVideo.css';

const HomeVideo = () => {
  const { t } = useTranslation();
  return (
    <section className="section home-video-section" id="video">
      <div className="container">
        <h2 className="section-title">{t('homeVideo.title')}</h2>
        <p className="section-subtitle">{t('homeVideo.subtitle')}</p>
        <div className="home-video-frame">
          <iframe
            src="https://www.youtube-nocookie.com/embed/SjQW02hrQZo"
            title="SuriCatch — see our operations"
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default HomeVideo;
