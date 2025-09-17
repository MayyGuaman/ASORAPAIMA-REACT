import React, { useState, useEffect, useRef } from 'react';

const StatsSection = ({
  theme = "default",
  title = "Impacto de Nuestro <span class='text-yellow-300'>Proyecto</span>",
  subtitle = "Números que reflejan nuestro compromiso con la investigación científica",
  animated = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ projects: 0, researchers: 0, publications: 0, years: 0 });
  const sectionRef = useRef(null);

  const finalStats = {
    projects: 15,
    researchers: 6,
    publications: 12,
    years: 3
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (animated) {
            startCountAnimation();
          }
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [animated]);

  const startCountAnimation = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        projects: Math.floor(finalStats.projects * progress),
        researchers: Math.floor(finalStats.researchers * progress),
        publications: Math.floor(finalStats.publications * progress),
        years: Math.floor(finalStats.years * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(finalStats);
      }
    }, stepDuration);
  };

  const stats = [
    {
      icon: 'fas fa-flask',
      number: animated ? counters.projects : finalStats.projects,
      label: 'Proyectos de Investigación',
      suffix: '+',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200'
    },
    {
      icon: 'fas fa-users',
      number: animated ? counters.researchers : finalStats.researchers,
      label: 'Investigadores Especializados',
      suffix: '',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      borderColor: 'border-green-200'
    },
    {
      icon: 'fas fa-file-alt',
      number: animated ? counters.publications : finalStats.publications,
      label: 'Publicaciones Científicas',
      suffix: '+',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-200'
    },
    {
      icon: 'fas fa-calendar',
      number: animated ? counters.years : finalStats.years,
      label: 'Años de Investigación',
      suffix: '+',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100',
      borderColor: 'border-orange-200'
    }
  ];

  const themeClasses = {
    default: 'bg-gradient-to-br from-gray-50 to-gray-100',
    dark: 'bg-gradient-to-br from-gray-900 to-gray-800',
    primary: 'bg-gradient-to-br from-green-600 to-blue-600'
  };

  const textColor = theme === 'dark' || theme === 'primary' ? 'text-white' : 'text-gray-900';
  const subtitleColor = theme === 'dark' || theme === 'primary' ? 'text-gray-200' : 'text-gray-600';

  return (
    <section 
      ref={sectionRef}
      className={`py-20 ${themeClasses[theme]} relative overflow-hidden`}
    >
      {/* Elementos decorativos */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-400/10 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-bold ${textColor} mb-6 leading-tight`}
            dangerouslySetInnerHTML={{ __html: title }}
          ></h2>
          
          <p className={`text-xl ${subtitleColor} max-w-3xl mx-auto leading-relaxed`}>
            {subtitle}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border ${stat.borderColor} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <i className={`${stat.icon} text-white text-lg lg:text-xl`}></i>
              </div>

              {/* Number */}
              <div className="text-center mb-2">
                <span className="text-3xl lg:text-4xl font-bold text-gray-900 tabular-nums">
                  {stat.number}
                </span>
                <span className="text-2xl lg:text-3xl font-bold text-gray-600">
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <p className="text-gray-600 text-sm lg:text-base font-medium text-center leading-tight">
                {stat.label}
              </p>

              {/* Progress bar decorativo */}
              <div className="mt-4 w-full bg-gray-200 rounded-full h-1 overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000 ease-out ${
                    isVisible ? 'w-full' : 'w-0'
                  }`}
                  style={{ transitionDelay: `${index * 200 + 500}ms` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`text-center mt-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="inline-flex items-center space-x-6 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
            <div className="flex items-center space-x-2 text-green-600">
              <i className="fas fa-award"></i>
              <span className="font-semibold text-sm">Excelencia Académica</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-2 text-blue-600">
              <i className="fas fa-globe"></i>
              <span className="font-semibold text-sm">Impacto Internacional</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-2 text-purple-600">
              <i className="fas fa-lightbulb"></i>
              <span className="font-semibold text-sm">Innovación Constante</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;