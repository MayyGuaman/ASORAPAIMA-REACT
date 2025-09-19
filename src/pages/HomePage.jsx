import React, { useEffect, useState } from 'react';
import HeroSection from '../components/common/HeroSection';
import StatsSection from '../components/sections/StatsSection';
import { Link } from 'react-router-dom';


const ResearchAreasSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('research-areas');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const researchAreas = [
    {
      title: 'Extracción de Aceites',
      description: 'Prensado mecánico en frío de oleaginosas para obtener aceites de alta calidad nutricional.',
      icon: 'fas fa-flask',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      borderColor: 'border-green-200'
    },
    {
      title: 'Conservas de Paiche',
      description: 'Desarrollo de tecnologías de conservación en envases de lata y vidrio.',
      icon: 'fas fa-fish',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Análisis Bromatológico',
      description: 'Caracterización química y nutricional completa de productos alimentarios.',
      icon: 'fas fa-microscope',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-200'
    },
    {
      title: 'Análisis Sensorial',
      description: 'Evaluación de características organolépticas y aceptabilidad del consumidor.',
      icon: 'fas fa-eye',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100',
      borderColor: 'border-orange-200'
    },
    {
      title: 'Estudios Comparativos',
      description: 'Comparación científica entre diferentes métodos y tecnologías aplicadas.',
      icon: 'fas fa-chart-bar',
      color: 'from-red-500 to-red-600',
      bgColor: 'from-red-50 to-red-100',
      borderColor: 'border-red-200'
    },
    {
      title: 'Innovación Tecnológica',
      description: 'Desarrollo de nuevas tecnologías para la industria agroalimentaria.',
      icon: 'fas fa-industry',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'from-teal-50 to-teal-100',
      borderColor: 'border-teal-200'
    }
  ];

  return (
    <section id="research-areas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <i className="fas fa-lightbulb mr-2"></i>
            Líneas de Investigación
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Líneas de <span className="text-green-600">Investigación</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Áreas principales de nuestro trabajo científico especializado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${area.bgColor} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 group border ${area.borderColor} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`bg-gradient-to-br ${area.color} text-white w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <i className={`${area.icon} text-xl`}></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {area.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('cta-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="cta-section" className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-48 translate-y-48"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          <div className="inline-flex items-center bg-yellow-400/20 backdrop-blur-sm text-yellow-200 px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <i className="fas fa-rocket mr-2"></i>
            Explora Nuestro Trabajo
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Explora Nuestra Investigación
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Descubre más sobre nuestras actividades, galería de imágenes y el equipo de investigadores
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/actividades"
              className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-green-800 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <i className="fas fa-flask mr-3"></i>
              Ver Actividades
            </Link>

            <Link
              to="/galeria"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white/80 hover:bg-white hover:text-green-800 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 backdrop-blur-sm"
            >
              <i className="fas fa-images mr-3"></i>
              Ver Galería
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  const [fadeElements, setFadeElements] = useState([]);

  useEffect(() => {
    // Inicializar animaciones de scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observar elementos con clase fade-in
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => observer.observe(el));
    setFadeElements(elements);

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <HeroSection
        title="Bienvenidos a <span class='text-yellow-300'>Asorapaima</span>"
        subtitle="Investigación científica del Paiche Amazónico y desarrollo de tecnologías innovadoras para la industria agroalimentaria"
        buttonText="Descubre Más"
        buttonLink="#descripcion"
        bgImage=""
        showStats={true}
        showScroll={true}
      />

      {/* Sección de Descripción */}
      <section id="descripcion" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="assets/images/descripcion.jpeg"
                  alt="Paiche Amazónico"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = '/imagenes/descripcion.jpeg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent"></div>
              </div>
            </div>

            <div className="fade-in space-y-6">
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                <i className="fas fa-leaf mr-2"></i>
                Investigación Amazónica
              </div>

              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Descripción del <span className="text-green-600">Paiche</span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                El pescado Paiche es originario de la amazonía ecuatoriana siendo este un pescado con un gran
                rendimiento de carne en filete y muy rico en proteínas, ácidos grasos, sales minerales y otros
                elementos de gran importancia para la nutrición humana.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Los pescados y mariscos se consideran como alimentos muy perecederos, sus composiciones tanto
                físicas, químicas y microbiológicas se alteran con rapidez y facilidad.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {['Rico en proteínas', 'Ácidos grasos esenciales', 'Sales minerales', 'Fácil digestión'].map((benefit, index) => (
                  <div key={index} className="flex items-center text-green-600">
                    <i className="fas fa-check-circle mr-2"></i>
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Beneficios */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <i className="fas fa-utensils mr-2"></i>
                Potencial Gastronómico
              </div>

              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Beneficios e <span className="text-blue-600">Importancia</span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                En la actualidad el paiche es un pez que se consume de una forma gastronómica potenciando el turismo
                en diferentes partes del Ecuador, siendo una especie exótica con un sabor muy apetecible por los consumidores.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Los consumidores se deleitan al probar diferentes platos como ceviches, apanados y entre otros.
                Esta especie no ha sido explotada industrialmente por el desconocimiento de tecnologías posibles
                para la industrialización del mismo, creando un amplio campo de oportunidades para poder ser
                aprovechado dentro de la industria Agroalimentaria.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <i className="fas fa-seedling text-3xl text-green-500 mb-2"></i>
                  <h3 className="font-semibold text-gray-800">Sostenible</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <i className="fas fa-heart text-3xl text-red-500 mb-2"></i>
                  <h3 className="font-semibold text-gray-800">Saludable</h3>
                </div>
              </div>
            </div>

            <div className="fade-in order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/imagenes/beneficios.jpeg"
                  alt="Beneficios del Paiche"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = '/imagenes/beneficios.jpeg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Estadísticas */}
      <StatsSection
        theme="default"
        title="Impacto de Nuestro <span class='text-yellow-500'>Proyecto</span>"
        subtitle="Números que reflejan nuestro compromiso con la investigación científica"
        animated={true}
      />

      {/* Líneas de Investigación */}
      <ResearchAreasSection />

      {/* CTA Section */}
      <CTASection />


      {/* Estilos CSS */}
      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }
        
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default HomePage;