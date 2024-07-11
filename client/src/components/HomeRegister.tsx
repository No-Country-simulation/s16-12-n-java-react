import React from 'react';
import { Button } from './ui/button';

interface HomeRegisterProps {
  mostrar: boolean;
  onClose: () => void;
}

const HomeRegister: React.FC<HomeRegisterProps> = ({ mostrar, onClose }) => {
  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  if (!mostrar) return null;

  return (
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus, jsx-a11y/click-events-have-key-events
    <div
      className='fixed top-0 left-0 w-full h-full flex justify-center bg-black bg-opacity-50 text-center items-center'
      onClick={handleClickOutside}
      role='button'
    >
      <div className='bg-white rounded-lg px-20 py-14 md:w-1/4 m-8'>
        <h2 className='text-2xl font-bold mb-4'>REGISTRO</h2>
        <p className='text-gray-700 mb-4'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum nemo
          nisi...
        </p>
        <div className='flex justify-center flex-col mb-4'>
          <input
            type='email'
            placeholder='Escribe tu email'
            className='border-gray-300 border p-2 rounded-md mb-2'
          />
          <input
            type='password'
            placeholder='Escribe tu contraseña'
            className='border-gray-300 border p-2 rounded-md mb-2'
          />
          <input
            type='password'
            placeholder='Repite tu contraseña'
            className='border-gray-300 border p-2 rounded-md mb-4'
          />
          <Button className='bg-gray-600 text-white px-4 py-2 rounded-md'>
            Registrarse
          </Button>
        </div>
        <span className='text-gray-600'>
          Al registrarse acepta nuestros{' '}
          <span className=' hover:text-blue-500 hover:underline'>
            terminos y condiciones
          </span>
        </span>
      </div>
    </div>
  );
};

export default HomeRegister;
