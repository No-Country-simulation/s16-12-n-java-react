import { axiosClient } from '../lib/axiosClient';

export const deleteBook = async (token: string, id: number): Promise<any> => {
  try {
    await axiosClient.delete(`/api/v1/tareas/delete/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.error('Error al eliminar la tarea:', error);
    throw error;
  }
};
