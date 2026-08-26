import React, { useEffect, useRef } from 'react';
import { Route, Routes, BrowserRouter as Router, useLocation, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import ScrollToTop from './components/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import AreasPage from './pages/AreasPage';
import ServicesPage from './pages/ServicesPage';
import CitizenshipsAndMigrationPage from './pages/CitizenshipsAndMigrationPage';
import InvestorPage from './pages/InvestorPage';
import ContactPage from './pages/ContactPage';
import NosotrosPage from './pages/NosotrosPage';

// Component to handle hash scrolling on route change
function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return null;
}

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    const startAudio = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.5;

        audioRef.current.play().catch((error) => {
          console.log('No se pudo iniciar el audio:', error);
        });
      }

      document.removeEventListener('click', startAudio);
      document.removeEventListener('touchstart', startAudio);
    };

    document.addEventListener('click', startAudio);
    document.addEventListener('touchstart', startAudio);

    return () => {
      document.removeEventListener('click', startAudio);
      document.removeEventListener('touchstart', startAudio);
    };
  }, []);
  return (
    <Router>
      <audio
        ref={audioRef}
        src="https://res.cloudinary.com/crwsvgt8/video/upload/v1787154884/Succession_Main_Title_Theme_-_Orchestral_Intro_Version.mp3"
        loop
        preload="auto"
      />
      <ScrollToTop />
      <ScrollToHashElement />
      <Toaster position="top-right" richColors toastOptions={{
        style: { fontFamily: 'Poppins, sans-serif' }
      }}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/areas" element={<AreasPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/ciudadanias-migratorio" element={<CitizenshipsAndMigrationPage />} />
        <Route path="/inversiones" element={<InvestorPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        
        {/* Redirects for old routes */}
        <Route path="/ciudadanias" element={<Navigate to="/ciudadanias-migratorio#ciudadanias-extranjeras" replace />} />
        <Route path="/migratorio" element={<Navigate to="/ciudadanias-migratorio#derecho-migratorio" replace />} />
        <Route path="/sobre-nosotros" element={<Navigate to="/nosotros" replace />} />
        
        {/* Catch-all route */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;