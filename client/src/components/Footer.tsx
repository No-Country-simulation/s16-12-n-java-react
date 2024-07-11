import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.jpeg';
import { Button } from './ui/button';

const Footer: React.FC = () => {
  return (
    <footer className='bg-black text-white py-8'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center space-x-4'>
          <img src={logo} alt='Logo' className='h-10 w-auto' />
          <nav className='flex flex-col space-y-2'>
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
              className='px-4 py-2 rounded bg-white text-black border border-gray-400 focus:outline-none'
            />
            <Button className='px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-600'>
              Suscríbete
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
