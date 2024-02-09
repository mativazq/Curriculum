import React from 'react';
import CvImage from '../../img/Cv-2.jpg';
import './Header.css';

const Header = () => {
  return (
    <>
      <h1 className='titulo'>Matías Vázquez</h1>
      <div className='foto'>
        <img src={CvImage} alt='Imagen Cv' className='imagen-cv' />
      </div>
    </>
  );
}

export default Header;
