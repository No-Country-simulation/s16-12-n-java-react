import { axiosClient } from '../lib/axiosClient';

export const editTask = async (token: string, id: number) => {
  try {
    const res = await axiosClient.put(`/api/v1/tareas/update/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    console.error('Error al editar la tarea:', error);
    throw error;
  }
};
