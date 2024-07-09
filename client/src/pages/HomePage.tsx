import React, { useState } from 'react';
import { HomeCarousel } from '@/components/HomeCarousel';
import { Cards } from '@/components/HomeCards';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import HomeRegister from '@/components/HomeRegister';
import HomeLogin from '@/components/HomeLogin';

const HomePage = () => {
  const [mostrarRegister, setMostrarRegister] = useState(false);
  const [mostrarLogin, setMostrarLogin] = useState(false);

  const handleCloseModal = () => {
    if (mostrarRegister) setMostrarRegister(false);
    if (mostrarLogin) setMostrarLogin(false);
  };

  return (
    <main className=''>
      {/* Section Carousel */}
      <Button onClick={() => setMostrarRegister(true)}>Registrarse</Button>
      <Button onClick={() => setMostrarLogin(true)}>Iniciar Sesion</Button>
      <section className=''>
        <HomeCarousel />
      </section>

      {/* Section Sugerencias */}
      <section className='grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-7xl mx-auto md:px-4 px-8 my-10'>
        <Cards />
      </section>

      {/* Section Categories */}
      <section className='max-w-7xl mx-auto md:px-4 px-8 my-10'>
        <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
          Categorías
        </h2>
        <div className='grid grid-cols-2 gap-x-16'>
          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='item-1'>
              <AccordionTrigger className='text-xl'>
                Desarrollo de Software
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger className='text-xl'>
                Redacción y Traducción
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='item-1'>
              <AccordionTrigger className='text-xl'>
                Diseño y Creatividad
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Renderizar el modal */}
      <HomeRegister mostrar={mostrarRegister} onClose={handleCloseModal} />
      <HomeLogin mostrar={mostrarLogin} onClose={handleCloseModal} />
    </main>
  );
};

export default HomePage;
