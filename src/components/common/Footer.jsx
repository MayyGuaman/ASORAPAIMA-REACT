import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-green-800 via-green-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Logo y redes */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
              <i className="fas fa-leaf text-green-800"></i>
            </div>
            <h3 className="text-xl font-bold">Asorapaima</h3>
          </div>

          <div className="flex space-x-4">
            <a href="https://www.facebook.com/espe.extension.santo.domingo" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f hover:text-blue-400"></i>
            </a>
            <a href="https://www.instagram.com/espe_santo_domingo" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram hover:text-pink-400"></i>
            </a>
            <a href="https://twitter.com/espe_oficial" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter hover:text-sky-400"></i>
            </a>
            <a href="https://linkedin.com/school/espe" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in hover:text-blue-500"></i>
            </a>
            <a href="https://www.youtube.com/@ESPEOficial" target="_blank" rel="noreferrer">
              <i className="fab fa-youtube hover:text-red-500"></i>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t border-white/10 pt-4 text-center text-gray-400 text-sm">
          <p>© {currentYear} Universidad de las Fuerzas Armadas ESPE - Santo Domingo</p>
          <p className="text-xs mt-1">Hecho con <i className="fas fa-heart text-red-400"></i> para la investigación</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
