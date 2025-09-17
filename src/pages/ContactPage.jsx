import React, { useState, useEffect } from 'react';

const ContactoPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Coordenadas de Santo Domingo, Ecuador
  const santoDoминgoCoords = {
    lat: -0.25305,
    lng: -79.17536
  };

  useEffect(() => {
    // Cargar Google Maps
    const loadGoogleMaps = () => {
      if (window.google) {
        initMap();
        return;
      }
      
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA8eaHt9Dh5H57Zh0xVTqxVdBFCvFMqFjQ&callback=initMap`;
      script.async = true;
      script.defer = true;
      
      window.initMap = initMap;
      document.head.appendChild(script);
    };

    const initMap = () => {
      const mapElement = document.getElementById('google-map');
      if (!mapElement) return;

      const map = new window.google.maps.Map(mapElement, {
        zoom: 13,
        center: santoDoминgoCoords,
        styles: [
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{"color": "#4B692B"}, {"lightness": 17}]
          },
          {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{"color": "#f5f5f2"}, {"lightness": 20}]
          }
        ]
      });

      new window.google.maps.Marker({
        position: santoDoминgoCoords,
        map: map,
        title: 'ESPE Santo Domingo',
        icon: {
          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#4B692B">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          `),
          scaledSize: new window.google.maps.Size(40, 40)
        }
      });
    };

    loadGoogleMaps();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    
    if (!formData.nombre.trim()) return 'El nombre es requerido';
    if (!formData.telefono.trim()) return 'El teléfono es requerido';
    if (!phoneRegex.test(formData.telefono)) return 'Formato de teléfono inválido';
    if (!formData.email.trim()) return 'El email es requerido';
    if (!emailRegex.test(formData.email)) return 'Formato de email inválido';
    if (!formData.mensaje.trim()) return 'El mensaje es requerido';
    
    return null;
  };

  const handleSubmit = async () => {
    const error = validateForm();
    if (error) {
      setSubmitStatus({ type: 'error', message: error });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simular envío
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Datos del formulario:', formData);
      
      setSubmitStatus({ 
        type: 'success', 
        message: '¡Mensaje enviado correctamente! Te contactaremos pronto.' 
      });
      
      setFormData({
        nombre: '',
        telefono: '',
        email: '',
        mensaje: ''
      });
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Error al enviar el mensaje. Inténtalo nuevamente.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header mejorado */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-90"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6" style={{backgroundColor: '#D9BF77'}}>
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Contáctanos
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos lo antes posible.
          </p>
        </div>
      </div>

      {/* Sección principal mejorada */}
      <div className="relative -mt-8 z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Formulario mejorado */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10 transform hover:scale-105 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-2" style={{color: '#4B692B'}}>
                  Envíanos un mensaje
                </h3>
                <p className="text-gray-600">
                  Completa el formulario y te contactaremos pronto
                </p>
              </div>
              
              {submitStatus && (
                <div className={`mb-6 p-4 rounded-lg text-center font-medium ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-100 text-green-800 border border-green-200' 
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`}>
                  {submitStatus.message}
                </div>
              )}
              
              <div className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder="Nombre completo"
                    className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:bg-white focus:outline-none text-gray-700 placeholder-gray-500 transition-all duration-300"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <div className="relative">
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    placeholder="Número de teléfono"
                    className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:bg-white focus:outline-none text-gray-700 placeholder-gray-500 transition-all duration-300"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                </div>
                
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Correo electrónico"
                    className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:bg-white focus:outline-none text-gray-700 placeholder-gray-500 transition-all duration-300"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                </div>
                
                <div className="relative">
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    placeholder="Escribe tu mensaje aquí..."
                    rows={5}
                    className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:bg-white focus:outline-none text-gray-700 placeholder-gray-500 resize-none transition-all duration-300"
                  />
                </div>
              </div>
              
              <div className="mt-8">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </div>
                  ) : (
                    'Enviar Mensaje'
                  )}
                </button>
              </div>
            </div>

            {/* Mapa mejorado */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="h-full min-h-96">
                <div 
                  id="google-map" 
                  className="w-full h-full min-h-96"
                  style={{ minHeight: '500px' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Información de contacto mejorada */}
      <div className="mt-16 py-16" style={{background: 'linear-gradient(135deg, #4B692B 0%, #3a5222 100%)'}}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Información de Contacto
            </h2>
            <p className="text-green-100 text-lg">
              Múltiples formas de contactarnos
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Ubicación */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#D9BF77'}}>
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-white">
                <h3 className="text-xl font-bold mb-2">Ubicación</h3>
                <p className="text-green-100 leading-relaxed">
                  Universidad de las Fuerzas Armadas ESPE<br/>
                  Santo Domingo de los Tsáchilas<br/>
                  Ecuador
                </p>
              </div>
            </div>

            {/* Teléfono */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#D9BF77'}}>
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div className="text-white">
                <h3 className="text-xl font-bold mb-2">Teléfono</h3>
                <p className="text-green-100 text-lg font-medium">
                  (02) 272-2246
                </p>
                <p className="text-green-100 text-sm">
                  Lunes a Viernes: 8:00 AM - 5:00 PM
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#D9BF77'}}>
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div className="text-white">
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-green-100 font-medium break-all">
                  santodomingo@espe.edu.ec
                </p>
                <p className="text-green-100 text-sm">
                  Respuesta en 24-48 horas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default ContactoPage;