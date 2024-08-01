/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import cards from '../utils/cards';

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
    <div className='w-full mx-auto px-8 py-20 xl:max-w-[1400px]'>
      <div className='flex justify-center gap-4 flex-wrap'>
        {data &&
          data.map((persona, index) => (
            <div
              key={`${persona.nombre}-${index}`}
              className={`flex flex-col gap-2 px-4 pt-4 pb-6 border ${colors[randomInt(colors.length)]} justify-evenly w-full rounded-xl sm:w-1/2 md:w-[32%] lg:w-[23%]`}
            >
              <img
                src={persona.imagen}
                alt={persona.nombre}
                className='w-full h-auto rounded-xl'
              />
              <div>
                <p className='text-[28px] font-bold'>{persona.nombre}</p>
                <div className='text-[18px] font-semibold flex gap-4 items-center'>
                  {persona.rol}
                  <img
                    src={persona.bandera}
                    alt='Bandera'
                    className='inline-block size-9 ml-1'
                  />
                </div>
              </div>
              <div className='text-[16px]'>
                <p>País: {persona.pais}</p>
                <p>Hobbies: {persona.hobbies}</p>
                <p>Herramientas: {persona.herramienta}</p>
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
