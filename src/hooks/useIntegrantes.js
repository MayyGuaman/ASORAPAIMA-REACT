import { useState, useEffect } from 'react';

const useIntegrantes = () => {
  const [mainMembers, setMainMembers] = useState([]);
  const [collaborators, setCollaborators] = useState([]);

  useEffect(() => {
    // Datos de investigadores principales
    const main = [
      {
        id: 'juan-neira',
        name: 'Juan Alejandro Neira Mosquera',
        institution: 'Universidad de las Fuerzas Armadas ESPE',
        department: 'Biociencias y Ciencias Agroalimentarias',
        degree: 'Doctor',
        image: '/imagenes/Dneira.jpg',

      },
      {
        id: 'sungey-sanchez',
        name: 'Sungey Naynee Sánchez Llaguno',
        institution: 'Universidad de las Fuerzas Armadas ESPE',
        department: 'Departamento de Bromatología y Tecnología de los Alimentos',
        degree: 'Doctor',
        image: '/imagenes/Dsungey.jpg',
      },
      {
        id: 'espe-university',
        name: 'Universidad de las Fuerzas Armadas ESPE',
        institution: 'Sede Santo Domingo',
        department: '',
        degree: 'Institución Anfitriona',
        image: '/imagenes/escudo.png',
        website: 'https://www.espe.edu.ec',
        isInstitution: true
      }
    ];

    // Datos de colaboradores
    const collab = [
      {
        id: 'mayerly-guaman',
        name: 'Mayerly Guaman',
        institution: 'Universidad de las Fuerzas Armadas ESPE',
        department: 'Ingeniería en Tecnologías de la Información',
        degree: 'Estudiante',
        image: '/imagenes/Mayerly.jpeg'
      },
      {
        id: 'jhanira-aranda',
        name: 'Jhanira Aranda',
        institution: 'Universidad de las Fuerzas Armadas ESPE',
        department: 'Ingeniería en Tecnologías de la Información',
        degree: 'Estudiante',
        image: '/imagenes/jhanira_v2.jpeg'
      },
      {
        id: 'espe-university-collab',
        name: 'Universidad de las Fuerzas Armadas ESPE',
        institution: 'Sede Santo Domingo',
        department: '',
        degree: 'Institución Colaboradora',
        image: '/imagenes/escudo.png',
        website: 'https://www.espe.edu.ec',
        isInstitution: true
      }
    ];

    setMainMembers(main);
    setCollaborators(collab);
  }, []);

  return { mainMembers, collaborators };
};

export default useIntegrantes;