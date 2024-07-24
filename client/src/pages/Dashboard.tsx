import React, { useEffect } from 'react';
import { ModalNewTask } from '@/components/ModaNewTask';
import useTaskStore from '@/store/taskStore';
import { TaskCard } from '@/components/TaskCard';

const Dashboard: React.FC = () => {
  const { fetchAllTasks, allTasks } = useTaskStore();

  useEffect(() => {
    fetchAllTasks();
  }, [fetchAllTasks]);

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Dashboard</h1>

      <ModalNewTask />

      {allTasks.content.length > 0 && (
        <div className='mt-8'>
          <h2 className='text-xl font-bold mb-4'>Tareas Publicadas</h2>
          <section className='grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-7xl mx-auto md:px-4 px-8 my-10'>
            {allTasks.content?.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </section>
        </div>
      )}

      {allTasks.content.length > 0 && (
        <div className='mt-8'>
          <h2 className='text-xl font-bold mb-4'>Postulaciones</h2>
          <section className='grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-7xl mx-auto md:px-4 px-8 my-10'>
            {allTasks.content?.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </section>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
