import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardContainer } from '@/components/CardContainer';
import { ModalNewTask } from '@/components/ModaNewTask';

const Dashboard: React.FC = () => {
  const [tasks, setTasks] = useState([]);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Fetch tasks
    axios
      .get('/api/tasks')
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
      });

    // Fetch applications
    axios
      .get('/api/applications')
      .then((response) => {
        setApplications(response.data);
      })
      .catch((error) => {
        console.error('Error fetching applications:', error);
      });
  }, []);

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Dashboard</h1>

      <ModalNewTask />

      {tasks.length > 0 && (
        <div className='mt-8'>
          <h2 className='text-xl font-bold mb-4'>Tareas Publicadas</h2>
          <CardContainer />
        </div>
      )}

      {applications.length > 0 && (
        <div className='mt-8'>
          <h2 className='text-xl font-bold mb-4'>Postulaciones</h2>
          <CardContainer />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
