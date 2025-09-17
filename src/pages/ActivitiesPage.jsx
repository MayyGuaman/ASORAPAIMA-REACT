import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


const ActivitiesPage = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
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

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const documents = [
    { name: 'Artículo 1', file: 'Articulo_1.pdf', color: 'from-blue-600 to-blue-700', hoverColor: 'hover:from-blue-500 hover:to-blue-600', textColor: 'text-blue-200', description: 'Investigación sobre extracción de aceites vegetales' },
    { name: 'Artículo 2', file: 'Articulo_2.pdf', color: 'from-green-600 to-green-700', hoverColor: 'hover:from-green-500 hover:to-green-600', textColor: 'text-green-200', description: 'Análisis bromatológico del paiche amazónico' },
    { name: 'Artículo 3', file: 'Articulo_3.pdf', color: 'from-purple-600 to-purple-700', hoverColor: 'hover:from-purple-500 hover:to-purple-600', textColor: 'text-purple-200', description: 'Características organolépticas y sensoriales' },
    { name: 'Artículo 4', file: 'Articulo_4.pdf', color: 'from-orange-600 to-orange-700', hoverColor: 'hover:from-orange-500 hover:to-orange-600', textColor: 'text-orange-200', description: 'Métodos de conservación innovadores' }
  ];

  const results = [
    { title: 'Perfil de Ácidos Grasos', description: 'Estudio detallado del perfil de ácidos grasos de aceites de oleaginosas obtenidos por prensado mecánico en frío.', icon: 'fas fa-leaf', color: 'from-green-50 to-green-100', iconBg: 'bg-green-500', border: 'border-green-200' },
    { title: 'Análisis Proximal', description: 'Análisis proximal completo de aceites de oleaginosas para determinar su composición nutricional exacta.', icon: 'fas fa-flask', color: 'from-blue-50 to-blue-100', iconBg: 'bg-blue-500', border: 'border-blue-200' },
    { title: 'Características Bromatológicas', description: 'Evaluación bromatológica completa de las conservas de paiche en diferentes tipos de envases.', icon: 'fas fa-fish', color: 'from-purple-50 to-purple-100', iconBg: 'bg-purple-500', border: 'border-purple-200' },
    { title: 'Características Físicas', description: 'Análisis de las características físicas de las conservas de paiche en envases de lata y vidrio.', icon: 'fas fa-weight', color: 'from-orange-50 to-orange-100', iconBg: 'bg-orange-500', border: 'border-orange-200' },
    { title: 'Características Organolépticas', description: 'Evaluación sensorial de las conservas de paiche para determinar aceptabilidad del consumidor.', icon: 'fas fa-eye', color: 'from-red-50 to-red-100', iconBg: 'bg-red-500', border: 'border-red-200' },
    { title: 'Estudios Comparativos', description: 'Comparación científica entre diferentes métodos de conservación y tipos de envases utilizados.', icon: 'fas fa-chart-bar', color: 'from-teal-50 to-teal-100', iconBg: 'bg-teal-500', border: 'border-teal-200' }
  ];

  const timelineSteps = [
    { title: 'Recepción y Selección', description: 'Selección cuidadosa de materia prima con características óptimas de frescura y calidad.', icon: 'fas fa-clipboard-list', color: 'bg-green-500' },
    { title: 'Procesamiento', description: 'Aplicación de técnicas especializadas de extracción y conservación bajo parámetros controlados.', icon: 'fas fa-cog', color: 'bg-blue-500' },
    { title: 'Análisis y Control', description: 'Evaluación exhaustiva de propiedades físicas, químicas y organolépticas del producto.', icon: 'fas fa-microscope', color: 'bg-purple-500' },
    { title: 'Resultados y Documentación', description: 'Documentación científica y análisis estadístico de los datos obtenidos en la investigación.', icon: 'fas fa-chart-line', color: 'bg-orange-500' }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(22, 101, 52, 0.8), rgba(21, 94, 117, 0.7)), url('assets/images/research-hero.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Nuestras <span className="text-yellow-300">Actividades</span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Procesos de investigación y desarrollo para la extracción de aceites vegetales y elaboración de conservas de paiche
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => document.getElementById('activities')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-green-800 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <i className="fas fa-arrow-down mr-3"></i>
              Explorar Investigación
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Main Activities Section */}
      <section className="py-20" id="activities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Activity 1: Oil Extraction */}
            <div className="fade-in">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 text-white">
                  <div className="flex items-center mb-4">
                    <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                      <i className="fa-solid fa-bottle-droplet text-2xl text-black"></i>
                    </div>
                    <h2 className="text-2xl font-bold">Extracción de Aceites Vegetales</h2>
                  </div>
                  <p className="text-green-100">Prensado mecánico en frío para obtener aceites de alta calidad nutricional</p>
                </div>

                <div className="p-8">
                  <div className="mb-6 overflow-hidden rounded-xl">
                    <img src="imagenes/aceites.jpeg"
                      alt="Proceso de extracción de aceites"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 shadow-md"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&w=600&h=400&fit=crop';
                      }}
                    />
                  </div>

                  <div className="space-y-4 text-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <i className="fas fa-cogs text-green-500 mr-2"></i>
                      Proceso de Extracción
                    </h3>

                    <p className="leading-relaxed">
                      El proceso de extracción se realizó receptando las semillas de <strong>sacha inchi</strong>,
                      <strong>ajonjolí</strong> y <strong>maní</strong>. Cada una de estas semillas deben estar previamente secas
                      con una humedad aproximada de 5 a 7% para obtener la mayor cantidad posible
                      de aceite en el prensado.
                    </p>

                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                        <i className="fas fa-info-circle mr-2"></i>
                        Especificaciones Técnicas
                      </h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li className="flex items-center"><i className="fas fa-check mr-2 text-green-600"></i>Presión de trabajo: 246-250 Bar</li>
                        <li className="flex items-center"><i className="fas fa-check mr-2 text-green-600"></i>Humedad de semillas: 5-7%</li>
                        <li className="flex items-center"><i className="fas fa-check mr-2 text-green-600"></i>Prensa hidráulica con cilindro émbolo</li>
                        <li className="flex items-center"><i className="fas fa-check mr-2 text-green-600"></i>Filtrado con placas de acero inoxidable</li>
                      </ul>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Semillas Procesadas:</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Sacha Inchi</span>
                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Ajonjolí</span>
                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">Maní</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity 2: Paiche Conservation */}
            <div className="fade-in">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white">
                  <div className="flex items-center mb-4">
                    <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                      <i className="fas fa-fish text-2xl text-black"></i>
                    </div>
                    <h2 className="text-2xl font-bold">Elaboración de Conservas de Paiche</h2>
                  </div>
                  <p className="text-blue-100">Proceso de conservación innovador en envases de lata y vidrio</p>
                </div>

                <div className="p-8">
                  <div className="mb-6 overflow-hidden rounded-xl">
                    <img src="imagenes/conserva.jpeg"
                      alt="Conservas de paiche"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 shadow-md"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&w=600&h=400&fit=crop';
                      }}
                    />
                  </div>

                  <div className="space-y-4 text-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <i className="fas fa-industry text-blue-500 mr-2"></i>
                      Proceso de Conservación
                    </h3>

                    <p className="leading-relaxed">
                      Consistió en la recepción de dos tipos de cortes (<strong>Lomo</strong> y <strong>Vientre</strong>) con las
                      adecuadas características de frescura. Se utilizaron 4 kg de paiche divididos
                      equitativamente entre envases de lata y vidrio.
                    </p>

                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                        <i className="fas fa-thermometer-half mr-2"></i>
                        Parámetros del Proceso
                      </h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li className="flex items-center"><i className="fas fa-check mr-2 text-blue-600"></i>Pre-cocción: 100°C, 4 lb/plg² por 15 min</li>
                        <li className="flex items-center"><i className="fas fa-check mr-2 text-blue-600"></i>Latas: 150g de pescado + 60ml de aceite</li>
                        <li className="flex items-center"><i className="fas fa-check mr-2 text-blue-600"></i>Vidrio: 215g de pescado + 80ml de aceite</li>
                        <li className="flex items-center"><i className="fas fa-check mr-2 text-blue-600"></i>Esterilización: 120°C, 14 lb/plg² por 60 min</li>
                      </ul>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Tipos de Envases:</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Lata</span>
                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">Vidrio</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Metodología de <span className="text-green-600">Investigación</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proceso científico riguroso aplicado en nuestros estudios especializados
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-gradient-to-b from-green-500 to-blue-500 hidden md:block"></div>

            <div className="space-y-12">
              {timelineSteps.map((step, index) => (
                <div key={index} className={`relative flex items-center fade-in ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className={`${step.color} text-white w-12 h-12 rounded-full flex items-center justify-center ${index % 2 === 0 ? 'mr-4 md:mr-0 md:ml-4' : 'mr-4'}`}>
                          <i className={`${step.icon} text-xl`}></i>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${step.color} rounded-full border-4 border-white shadow-lg hidden md:block`}></div>
                  <div className={`flex-1 ${index % 2 === 0 ? 'hidden md:block' : 'md:pr-8 hidden md:block'}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resultados de la <span className="text-blue-600">Investigación</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estudios científicos realizados sobre las propiedades del paiche y aceites de oleaginosas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <div key={index} className="fade-in group">
                <div className={`bg-gradient-to-br ${result.color} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border ${result.border} group-hover:scale-105`}>
                  <div className={`${result.iconBg} text-white w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${result.icon} text-xl`}></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {result.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {result.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <i className="fas fa-file-alt mr-3 text-yellow-400"></i>
              Documentación <span className="text-yellow-400">Científica</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Accede a nuestros artículos de investigación y documentación técnica especializada
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documents.map((doc, index) => (
              <a key={index}
                href={`documentos/${doc.file}`}
                download={doc.file}
                className={`bg-gradient-to-br ${doc.color} p-6 rounded-2xl shadow-xl hover:shadow-2xl text-center block transition-all duration-300 ${doc.hoverColor} transform hover:scale-105 group`}>
                <i className={`fas fa-file-pdf text-4xl mb-4  group-hover:scale-110 transition-transform duration-300`}></i>
                <h3 className="text-lg font-semibold mb-2">{doc.name}</h3>
                <p className={`${doc.textColor} text-sm mb-4`}>{doc.description}</p>
                <div className="inline-flex items-center text-white bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                  <i className="fas fa-download text-black "></i>
                  Descargar PDF
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center fade-in">
            <p className="text-gray-400 mb-4">
              ¿Necesitas más información sobre nuestras publicaciones?
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <i className="fas fa-envelope mr-2"></i>
              Contactar para más información
            </Link>
          </div>
        </div>
      </section>

      
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

export default ActivitiesPage;