import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Persona {
  imagen: string;
  nombre: string;
  bandera: string;
  rol: string;
  pais: string;
  hobbies: string;
  herramienta: string;
  links: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkdin?: string;
    [key: string]: string | undefined;
  };
}

const AboutUs = () => {
  const [data, setData] = useState<Persona[] | null>(null);

  useEffect(() => {
    fetch('/data/cards.json')
      .then((response) => {
        if (!response.ok) throw new Error('Archivo no encontrado');
        return response.json();
      })
      .then((data) => setData(data.cards))
      .catch((error) => console.error('Ha ocurrido un error', error));
  }, []);

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
                <p>Herramientas favoritas: {persona.herramienta}</p>
              </div>
              <div className='flex space-x-2'>
                {Object.entries(persona.links).map(([key, link]) =>
                  link ? (
                    <Link key={key} to={link}>
                      <img
                        src={`src/assets/icons/${key}.png`}
                        alt={key}
                        className='size-6'
                      />
                    </Link>
                  ) : null
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AboutUs;
