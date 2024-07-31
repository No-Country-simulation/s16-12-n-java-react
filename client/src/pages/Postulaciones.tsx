import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CardPostulacion } from '@/components/CardPostulacion';
import { ApplicationData } from '@/types/types';
import useAuthApplicationStore from '@/store/authApplicationStore';

const Postulaciones = () => {
  const { tareaId } = useParams();
  const { fetchApplicationByTask, applicationByTask } =
    useAuthApplicationStore();
  console.log(applicationByTask);

  useEffect(() => {
    if (tareaId) {
      const numericId = parseInt(tareaId, 10);
      if (!Number.isNaN(numericId)) fetchApplicationByTask(numericId);
    }
  }, [fetchApplicationByTask, tareaId]);

  return (
    <div className='container mx-auto p-4 h-screen'>
      <h1 className='text-2xl font-bold mb-4'>Postulaciones de la tarea</h1>

      {applicationByTask && applicationByTask?.length > 0 && (
        <div className='mt-8'>
          <h2 className='text-xl font-bold mb-4'>Postulaciones</h2>
          <section className='grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-7xl mx-auto md:px-4 px-8 my-10'>
            {applicationByTask?.map((application: ApplicationData) => (
              <CardPostulacion key={application.id} application={application} />
            ))}
          </section>
        </div>
      )}
    </div>
  );
};

export default Postulaciones;
