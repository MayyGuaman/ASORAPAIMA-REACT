import React from 'react';

const Card = ({ member, isMain = false }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Imagen centrada */}
      <div className="h-100 bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={member.image?.startsWith('/') ? member.image : `/${member.image}`}
          alt={member.name}
          className={`${
            member.isInstitution 
              ? 'max-w-full max-h-full object-contain p-4' 
              : 'w-full h-full object-cover'
          }`}
          onError={(e) => {
            e.target.src = member.isInstitution 
              ? 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&w=400&h=320&fit=crop'
              : 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=400&h=320&fit=crop';
          }}
        />
      </div>

      {/* Contenido */}
      <div className="p-6">
        

        <h3 className="text-lg font-bold text-gray-900 mb-2">
          {member.name}
        </h3>
        
        <p className="text-green-600 font-medium text-sm mb-2">
          {member.institution}
        </p>
        
        {member.department && (
          <p className="text-gray-600 text-sm mb-3">
            {member.department}
          </p>
        )}
        
        {member.degree && (
          <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm font-medium mb-3 inline-block">
            {member.degree}
          </div>
        )}

        {/* Especialidades */}
        {member.specialties && member.specialties.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Especialidades:</h4>
            <div className="flex flex-wrap gap-1">
              {member.specialties.map((specialty, idx) => (
                <span
                  key={idx}
                  className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Stats para investigadores principales */}
        {isMain && member.stats && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {member.stats.map((stat, idx) => (
                <div key={idx} className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-medium">
                  {stat}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Enfoque de investigación */}
        {member.researchFocus && (
          <div className="mb-4">
            <p className="text-gray-600 text-sm">
              <strong>Enfoque:</strong> {member.researchFocus}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;