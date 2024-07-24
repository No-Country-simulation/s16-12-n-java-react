import { TaskData } from '@/types/types';
import { axiosClient } from '../lib/axiosClient';

export const createTask = async (
  token: string,
  id: number,
  taskData: TaskData
): Promise<any> => {
  try {
    const res = await axiosClient.post(
      `/api/v1/tareas/update/${id}`,
      taskData,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return res.data;
  } catch (error) {
    console.error('Error al editar la tarea:', error);
    throw error;
  }
};
