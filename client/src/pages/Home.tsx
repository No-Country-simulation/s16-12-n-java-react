import { useEffect } from 'react';
import { HomeCarousel } from '@/components/HomeCarousel';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import useTaskStore from '@/store/taskStore';
import { TaskCard } from '@/components/TaskCard';

const Home = () => {
  const { fetchAllTasks, allTasks } = useTaskStore();

  useEffect(() => {
    fetchAllTasks();
  }, [fetchAllTasks]);

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
                Resolver problemas específicos utilizando lenguajes de programación.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger className='text-xl'>
                Redacción y Traducción
              </AccordionTrigger>
              <AccordionContent>
                Crear productos o experiencias planificando y ejecutando ideas innovadoras.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='item-1'>
              <AccordionTrigger className='text-xl'>
                Diseño y Creatividad
              </AccordionTrigger>
              <AccordionContent>
                Comunicación de ideas de manera clara y efectiva, en español o en otro idioma.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Section Sugerencias */}
      <section className='grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-7xl mx-auto md:px-4 px-8 my-10'>
        {allTasks.content?.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </section>
    </main>
  );
};

export default Home;
