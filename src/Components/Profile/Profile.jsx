import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [abierto, setAbierto] = useState(false);

  const toggleTexto = () => {
    setAbierto(!abierto);
  };

  return (
    <>
      <h2 className='profile' onClick={toggleTexto} style={{ cursor: 'pointer' }}>
        Perfil
      </h2>
      {abierto && (
        <p className='textoCv'>
          Soy un apasionado por la tecnología, me gusta estar constantemente en aprendizaje. Me gustan los nuevos desafíos, desafiar lo establecido y adaptarme a los nuevos entornos. Elijo trabajar en ambientes diversos e inclusivos, fomentando la colaboración y aprendiendo de mis compañeros, además de aportar mi conocimiento. Actualmente me encuentro desarrollándome en Python.
        </p>
      )}
    </>
  );
};

export default Profile;
