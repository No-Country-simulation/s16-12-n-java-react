import React, { useEffect } from 'react';
import { ModalNewTask } from '@/components/ModaNewTask';
import useAuthTaskStore from '@/store/authTaskStore';
import { TaskCard } from '@/components/TaskCard';
import { ApplicationCard } from '@/components/ApplicationCard';
import { ApplicationData } from '@/types/types';

const Dashboard: React.FC = () => {
  const { fetchUserTasks, userTasks, fetchUserApplication, userApplication } =
    useAuthTaskStore();

  useEffect(() => {
    fetchUserTasks();
    fetchUserApplication();
  }, [fetchUserTasks, fetchUserApplication]);

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Dashboard</h1>

      <ModalNewTask />

      {userTasks && userTasks.length > 0 && (
        <div className='mt-8'>
          <h2 className='text-xl font-bold mb-4'>Tareas Publicadas</h2>
          <section className='grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-7xl mx-auto md:px-4 px-8 my-10'>
            {userTasks?.map((task) => <TaskCard key={task.id} task={task} />)}
          </section>
        </div>
      )}

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

export default Dashboard;
