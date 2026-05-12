import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import HomeVideo from './components/HomeVideo';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Products from './components/Products';
import About from './components/About';

const FULL_PAGE_HASHES = ['#products', '#about'];

function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => {
      setHash(window.location.hash);
      if (FULL_PAGE_HASHES.includes(window.location.hash)) {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    if (hash && !FULL_PAGE_HASHES.includes(hash)) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);

  if (hash === '#products') {
    return <Products />;
  }
  if (hash === '#about') {
    return <About />;
  }

  return (
    <div className="App">
      <Hero />
      <Services />
      <HomeVideo />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
