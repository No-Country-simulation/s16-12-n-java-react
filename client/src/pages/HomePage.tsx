import { HomeCarousel } from '@/components/HomeCarousel';
import { Cards } from '@/components/HomeCards';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import HomeRegister from '@/components/HomeRegister';
import HomeLogin from '@/components/HomeLogin';
import NavBar from '@/components/NavBar';
import { useModalStore } from '../store/modalStore';
import Footer from '@/components/Footer';

const HomePage = () => {
  const { mostrarRegister, mostrarLogin, handleCloseModal } = useModalStore();

  return (
    <main className=''>
      {/* Section Carousel */}
      <NavBar />
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
      <Footer />
    </main>
  );
};

export default HomePage;
