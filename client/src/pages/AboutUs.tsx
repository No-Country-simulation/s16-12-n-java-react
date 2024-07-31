/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import cards from '../utils/cards'; // Ajusta la ruta según la ubicación de tu archivo data.js

const AboutUs = () => {
  const [data] = useState(cards);

  const colors = [
    'bg-palette_success_card',
    'bg-palette_primary_card',
    'bg-palette_error',
    'bg-palette_secondary',
  ];

  const randomInt = (max: number) => Math.floor(Math.random() * max);

  return (
    <div className='container py-20'>
      <div className='h-full grid md:grid-cols-3 gap-10 lg:grid-cols-4 sm:grid-cols-2'>
        {data &&
          data.map((persona, index) => (
            <div
              key={`${persona.nombre}-${index}`}
              className={`flex flex-col gap-2 px-4 pt-4 pb-6 border ${colors[randomInt(colors.length)]} justify-between rounded-xl`}
            >
              <img
                src={persona.imagen}
                alt={persona.nombre}
                className='w-full h-auto rounded-xl'
              />
              <div>
                <p className='text-[28px] font-bold'>
                  {persona.nombre}{' '}
                  <img
                    src={persona.bandera}
                    alt='Bandera'
                    className='inline-block size-9 ml-1'
                  />
                </p>
                <p className='text-[18px] font-semibold'>{persona.rol}</p>
              </div>
              <div className='text-[16px]'>
                <p>País: {persona.pais}</p>
                <p>Hobbies: {persona.hobbies}</p>
                <p>Herramienta: {persona.herramienta}</p>
              </div>
              <div className='flex flex-wrap gap-2 mt-2'>
                {Object.entries(persona.links).map(
                  ([key, { url, icon: Icon }]) => (
                    <a
                      key={key}
                      href={url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-600 hover:underline'
                    >
                      <Icon className='w-6 h-6' style={{ color: 'black' }} />{' '}
                    </a>
                  )
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AboutUs;
