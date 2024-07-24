import { CardContainer } from '@/components/CardContainer';
import { HomeCarousel } from '@/components/HomeCarousel';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Home = () => {
  return (
    <main className=''>
      {/* Section Carousel */}
      <section className=''>
        <HomeCarousel />
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

      {/* Section Sugerencias */}
      <section className='w-9/12 mx-auto'>
        <CardContainer />
      </section>
    </main>
  );
};

export default Home;
