import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

import Home from './routes/Home.jsx';
import Facilities from './routes/Facilities.jsx';
import Diseases from './routes/Diseases.jsx';
import WomenHealth from './routes/WomenHealth.jsx';
import ViralInfections from './routes/ViralInfections.jsx';
import FirstAid from './routes/FirstAid.jsx';
import Emergency from './routes/Emergency.jsx';
import FAQ from './routes/FAQ.jsx';

export default function App() {
  const [showHeader, setShowHeader] = useState(true);
  const lastYRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    const updateHeaderHeightVar = () => {
      const header = document.getElementById('site-header');
      const h = header ? header.offsetHeight : 72;
      document.documentElement.style.setProperty('--header-height', `${h}px`);
    };
    updateHeaderHeightVar();
    window.addEventListener('resize', updateHeaderHeightVar);
    return () => window.removeEventListener('resize', updateHeaderHeightVar);
  }, []);

  useEffect(() => {
    lastYRef.current = window.scrollY || 0;

    const onScroll = () => {
      const currentY = window.scrollY || 0;
      const delta = currentY - lastYRef.current;

      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const scrollingDown = delta > 0;

          if (currentY <= 0) {
            setShowHeader(true);
          } else if (scrollingDown) {
            setShowHeader(false);
          } else {
            setShowHeader(true);
          }

          lastYRef.current = currentY;
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="app">
      <Header show={showHeader} />
      <main aria-live="polite" style={{ paddingTop: 'var(--header-height)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/diseases" element={<Diseases />} />
          <Route path="/women" element={<WomenHealth />} />
          <Route path="/viral" element={<ViralInfections />} />
          <Route path="/first-aid" element={<FirstAid />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>
      <Footer show={true} />
    </div>
  );
}
