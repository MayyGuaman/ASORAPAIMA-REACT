import React, { useEffect, useState } from 'react';

const HeroSection = ({ 
  title, 
  subtitle, 
  buttonText = "Descubre Más", 
  buttonLink = "#descripcion", 
  bgImage = "",
  showStats = true,
  showScroll = true 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScrollTo = (targetId) => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { number: "6", label: "Investigadores", icon: "fas fa-users" },
    { number: "1", label: "Universidades", icon: "fas fa-university" },
    { number: "3+", label: "Publicaciones", icon: "fas fa-file-alt" },
    { number: "3", label: "Líneas de Investigación", icon: "fas fa-microscope" }
  ];

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(22, 101, 52, 0.8), rgba(21, 94, 117, 0.7)), url('${bgImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
      
      {/* Particles effect */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-300/30 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Badge superior */}
          <div className="inline-flex items-center bg-yellow-400/90 text-green-800 px-6 py-2 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm shadow-lg">
            <i className="fas fa-leaf mr-2"></i>
            Investigación Amazónica Innovadora
          </div>

          {/* Título principal */}
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => handleScrollTo(buttonLink)}
              className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-green-800 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <i className="fas fa-arrow-down mr-3"></i>
              {buttonText}
            </button>
            
          
          </div>

          {/* Estadísticas */}
          {showStats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center transition-all duration-500 transform hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/90 text-sm font-medium mb-2">
                    {stat.label}
                  </div>
                  <i className={`${stat.icon} text-blue-300 text-lg`}></i>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      {showScroll && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      )}

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
    </section>
  );
};

export default HeroSection;