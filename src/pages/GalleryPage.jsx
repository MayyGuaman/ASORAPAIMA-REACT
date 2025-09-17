import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { id: 1, src: '/imagenes/galeria1.jpeg', alt: 'Investigación Paiche 1' },
    { id: 2, src: '/imagenes/galeria2.jpeg', alt: 'Proceso de extracción' },
    { id: 3, src: '/imagenes/galeria7.jpeg', alt: 'Análisis de laboratorio' },
    { id: 4, src: '/imagenes/galeria4.jpeg', alt: 'Conservas en proceso' },
    { id: 5, src: '/imagenes/galeria5.jpeg', alt: 'Equipo de trabajo' },
    { id: 6, src: '/imagenes/galeria6.jpeg', alt: 'Resultados de investigación' },
    { id: 7, src: '/imagenes/galeria3.jpeg', alt: 'Productos terminados' },
    { id: 8, src: '/imagenes/galeria.png', alt: 'Presentación de resultados' },
    { id: 9, src: '/imagenes/conserva.jpeg', alt: 'Investigación de campo' },
    { id: 10, src: '/imagenes/aceites.jpeg', alt: 'Equipo en acción' }
  ];

  return (
    <div>
      <Navbar currentPage="galeria" />
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-green-800 mb-12 text-center">Galería de Investigación</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = `https://images.unsplash.com/photo-1544943910-4c1dc44aab44?ixlib=rb-4.0.3&w=400&h=300&fit=crop&sig=${image.id}`;
                  }}
                />
              </div>
            ))}
          </div>

          {/* Modal para imagen ampliada */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div
                className="relative max-w-4xl max-h-full rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer clic en la imagen
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-2 right-2 z-10 text-white hover:text-gray-300 bg-black/60 rounded-full p-2"
                >
                  ✕
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default GalleryPage;