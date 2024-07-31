import { useEffect } from 'react';
import { TaskCard } from '@/components/TaskCard';
import useAuthTaskStore from '@/store/authTaskStore';

const MyTasks = () => {
  const { fetchUserTasks, userTasks } = useAuthTaskStore();

  useEffect(() => {
    fetchUserTasks();
  }, [fetchUserTasks]);

  return (
    <div className='container mx-auto p-4 h-screen'>
      <h1 className='text-2xl font-bold mb-4'>Mis Tareas</h1>

      {userTasks && userTasks.length > 0 && (
        <div className='mt-8'>
          <h2 className='text-xl font-bold mb-4'>Tareas Publicadas</h2>
          <section className='grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-7xl mx-auto md:px-4 px-8 my-10'>
            {userTasks?.map((task) => <TaskCard key={task.id} task={task} />)}
          </section>
        </div>
      )}
    </div>
  );
};

export default MyTasks;
