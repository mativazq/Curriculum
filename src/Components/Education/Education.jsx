import React, { useState } from 'react';
import "./Education.css";

const Education = () => {

  const [abierto, setAbierto] = useState(false);

  const toggleTexto = () => {
    setAbierto(!abierto);
  };


  return (
    <>
      <h2 className='education' onClick={toggleTexto} style={{ cursor: 'pointer' }} >Educación</h2>
      
      {abierto && (
        <div className='container'>
          <h3>Secundaria:</h3>
          <h5>Titulo Obtenido:</h5>
          <p>Tecnico en Informatica Profesional y Personal.</p>
          <h3>Cursos Realizados:</h3>
          <p>- Desarrollo Web en HTML y CSS.
            - Desarrollo en JavaScript.
            - Desarrollo Web en ReactJS.
          </p>
          </div>
      )}
    </>
  );
};

export default Education;
