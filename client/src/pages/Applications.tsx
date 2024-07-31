import { useEffect } from 'react';
import { ApplicationCard } from '@/components/ApplicationCard';
import useAuthTaskStore from '@/store/authTaskStore';
import { ApplicationData } from '@/types/types';

const Applications = () => {
  const { fetchUserApplication, userApplication } = useAuthTaskStore();

  useEffect(() => {
    fetchUserApplication();
  }, [fetchUserApplication]);

  return (
    <div className='container mx-auto p-4 h-screen'>
      <h1 className='text-2xl font-bold mb-4'>Mis Tareas</h1>

      {userApplication && userApplication.length > 0 && (
        <div className='mt-8'>
          <h2 className='text-xl font-bold mb-4'>Postulaciones</h2>
          <section className='grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-7xl mx-auto md:px-4 px-8 my-10'>
            {userApplication?.map((application: ApplicationData) => (
              <ApplicationCard key={application.id} application={application} />
            ))}
          </section>
        </div>
      )}
    </div>
  );
};

export default Applications;
