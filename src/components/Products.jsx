import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from './Header';
import Footer from './Footer';
import './Products.css';

const ProductCard = ({ item, t }) => (
  <article className="product-card">
    <p className="product-sci">{item.sci}</p>
    <h3 className="product-name">{item.name}</h3>
    <ul className="product-cuts">
      {item.cuts.map((cutKey) => (
        <li key={cutKey} className="cut-tag">{t(`products.cuts.${cutKey}`)}</li>
      ))}
    </ul>
  </article>
);

const Products = () => {
  const { t } = useTranslation();
  const frozen = t('products.frozen', { returnObjects: true });
  const fresh = t('products.fresh', { returnObjects: true });

  return (
    <div className="products-page">
      <div className="products-hero-bg"></div>
      <Header />

      <section className="products-intro container">
        <p className="products-eyebrow">{t('products.eyebrow')}</p>
        <h1 className="products-title" style={{ whiteSpace: 'pre-line' }}>{t('products.title')}</h1>
        <p className="products-subtitle">{t('products.subtitle')}</p>
      </section>

      <main className="products-main">
        <section className="products-section container">
          <header className="category-header">
            <h2 className="category-title">{frozen.title}</h2>
            <p className="category-desc">{frozen.desc}</p>
          </header>
          <div className="products-grid">
            {frozen.items.map((item, i) => (
              <ProductCard key={`f-${i}`} item={item} t={t} />
            ))}
          </div>
        </section>

        <section className="products-section container">
          <header className="category-header">
            <h2 className="category-title">{fresh.title}</h2>
            <p className="category-desc">{fresh.desc}</p>
          </header>
          <div className="products-grid">
            {fresh.items.map((item, i) => (
              <ProductCard key={`r-${i}`} item={item} t={t} />
            ))}
          </div>
        </section>

        <section className="container">
          <div className="products-cta">
            <h3>{t('products.ctaTitle')}</h3>
            <p>{t('products.ctaDesc')}</p>
            <a href="#contact" className="btn btn-secondary">{t('products.ctaBtn')}</a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
