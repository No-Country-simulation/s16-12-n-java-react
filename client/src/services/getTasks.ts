import { axiosClient } from '../lib/axiosClient';

export const getAllTasks = async () => {
  try {
    const res = await axiosClient.get('/api/v1/tareas/findAll');
    return res.data;
  } catch (error) {
    console.log('Error al obtener todas las tareas', error);
    throw error;
  }
};

export const getTaskById = async (id: number) => {
  try {
    const res = await axiosClient.get(`/api/v1/tareas/findById/${id}`);
    return res.data;
  } catch (error) {
    console.log(`Error al obtener la tarea con id ${id}`, error);
    throw error;
  }
};
