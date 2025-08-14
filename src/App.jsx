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
  const [showFooter, setShowFooter] = useState(false);
  const lastYRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    lastYRef.current = window.scrollY || 0;

    const onScroll = () => {
      const currentY = window.scrollY || 0;
      const delta = currentY - lastYRef.current;

      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const threshold = 8; // avoid flicker on tiny moves
          const doc = document.documentElement;
          const viewportBottom = (window.innerHeight || doc.clientHeight) + currentY;
          const pageHeight = doc.scrollHeight;
          const nearBottom = viewportBottom >= pageHeight - 24; // only show footer near end

          if (currentY <= 0) {
            setShowHeader(true);
            setShowFooter(false);
          } else if (Math.abs(delta) > threshold) {
            const scrollingDown = delta > 0;
            setShowHeader(!scrollingDown);
            setShowFooter(nearBottom);
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
      <main aria-live="polite">
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
      <Footer show={showFooter} />
    </div>
  );
}
