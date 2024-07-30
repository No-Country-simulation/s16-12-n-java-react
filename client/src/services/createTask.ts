import { TaskData } from '@/types/types';
import { axiosClient } from '../lib/axiosClient';

export const createTask = async (
  token: string,
  taskData: TaskData
): Promise<any> => {
  try {
    const res = await axiosClient.post('/api/v1/tareas/save', taskData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    console.error('Error al crear la tarea:', error);
    throw error;
  }
};
