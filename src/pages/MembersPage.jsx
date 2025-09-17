import React from 'react';
import useIntegrantes from '../hooks/useIntegrantes';
import Card from '../components/ui/Card';

const MembersPage = () => {
  const { mainMembers, collaborators } = useIntegrantes();

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Sección Hero - Verde */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestro Equipo de Investigación
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8">
            Conoce a los investigadores y colaboradores dedicados al estudio del paiche amazónico
          </p>
          <div className="w-24 h-1 bg-green-300 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Sección Equipo Principal */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Equipo Principal
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Investigadores principales e institución anfitriona que lideran nuestro proyecto de investigación
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainMembers.map((member) => (
              <Card key={member.id} member={member} isMain={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Sección Colaboradores */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Colaboradores
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Investigadores doctorales que contribuyen activamente al desarrollo del proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {collaborators.map((member) => (
              <Card key={member.id} member={member} isMain={false} />
            ))}
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default MembersPage;