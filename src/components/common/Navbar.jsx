// src/components/common/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', to: '/', icon: 'fas fa-home', id: 'inicio' },
    { name: 'Actividades', to: '/actividades', icon: 'fas fa-flask', id: 'actividades' },
    { name: 'Galería', to: '/galeria', icon: 'fas fa-images', id: 'galeria' },
    { name: 'Integrantes', to: '/integrantes', icon: 'fas fa-users', id: 'integrantes' },
    { name: 'Contacto', to: '/contacto', icon: 'fas fa-envelope', id: 'contacto' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xl'
          : 'bg-gradient-to-r from-green-800/95 to-blue-800/95 backdrop-blur-sm'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className={`flex items-center space-x-3 transition-colors duration-300 ${scrolled ? 'text-green-800' : 'text-white'
              }`}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
              <i className="fas fa-fish text-green-800 text-lg"></i> {/* Cambiado de fa-leaf a fa-fish */}
            </div>
            <div>
              <span className="text-xl font-bold">Asorapaima</span>
              <div className="text-xs opacity-75">ESPE Santo Domingo</div>
            </div>
          </Link>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${location.pathname === item.to
                    ? scrolled
                      ? 'bg-green-100 text-green-800 shadow-md'
                      : 'bg-white/20 text-yellow-300 shadow-lg'
                    : scrolled
                      ? 'text-gray-600 hover:text-green-800 hover:bg-green-50'
                      : 'text-white/90 hover:text-yellow-300 hover:bg-white/10'
                  } transform hover:scale-105`}
              >
                <i className={`${item.icon} text-sm`}></i>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${scrolled
                  ? 'text-gray-600 hover:text-green-800 hover:bg-green-50'
                  : 'text-white hover:bg-white/10'
                }`}
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${location.pathname === item.to
                    ? 'bg-green-100 text-green-800 shadow-md'
                    : 'text-gray-600 hover:text-green-800 hover:bg-green-50'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                <i className={`${item.icon} text-lg w-5`}></i>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
