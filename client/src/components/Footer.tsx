import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Button } from './ui/button';

const Footer: React.FC = () => {
  return (
    <footer className='bg-palette_dark text-white py-8 mt-auto'>
      <div className='container mx-auto flex justify-between items-center w-9/12'>
        <div className='flex items-center space-x-8'>
          <Link to='/'>
            <img src={logo} alt='Logo' className='h-5 w-auto' />
          </Link>
          <nav className='flex flex-col space-y-2 font-bold'>
            <Link to='/' className='hover:text-gray-400'>
              Inicio
            </Link>
            <Link to='/about' className='hover:text-gray-400'>
              Nosotros
            </Link>
            <Link to='/contact' className='hover:text-gray-400'>
              Conáctanos
            </Link>
          </nav>
        </div>
        <div className='flex flex-col space-y-2'>
          <p>Suscríbete a nuestro Newsletter</p>
          <div className='flex space-x-2'>
            <input
              type='email'
              placeholder='Escribe tu email'
              className='px-4 py-2 rounded-lg bg-white text-black border border-gray-400 focus:outline-none'
            />
            <Button className='px-4 py-2 bg-palette_secondary text-white hover:bg-gray-600 font-bold'>
              Suscríbete
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
