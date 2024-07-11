import React from 'react';
import { Button } from './ui/button';

interface HomeLoginProps {
  mostrar: boolean;
  onClose: () => void;
}

const HomeLogin: React.FC<HomeLoginProps> = ({ mostrar, onClose }) => {
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
        <h2 className='text-2xl font-bold mb-4'>INICIAR SESION</h2>
        <p className='text-gray-700 mb-4'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum nemo
          nisi...
        </p>
        <div className='flex justify-center flex-col mb-4'>
          <input
            type='text'
            placeholder='Email'
            className='border-gray-300 border p-2 rounded-md mb-2'
          />
          <input
            type='password'
            placeholder='Contraseña'
            className='border-gray-300 border p-2 rounded-md mb-2'
          />
          <Button className='bg-gray-600 text-white px-4 py-2 rounded-md'>
            Ingresa
          </Button>
        </div>
        <span className='text-gray-600 hover:text-blue-500 hover:underline'>
          ¿Olvidas tu contraseña?
        </span>
      </div>
    </div>
  );
};

export default HomeLogin;
