// src/App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ActivitiesPage from './pages/ActivitiesPage';
import GalleryPage from './pages/GalleryPage';
import MembersPage from './pages/MembersPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    document.title = 'Asorapaima - Investigación del Paiche Amazónico';
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg mb-4 mx-auto animate-pulse">
            <i className="fas fa-fish text-green-800 text-2xl"></i>
          </div>
          <div className="text-2xl font-bold text-green-800">Asorapaima</div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/actividades" element={<ActivitiesPage />} />
        <Route path="/galeria" element={<GalleryPage />} />
        <Route path="/integrantes" element={<MembersPage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;