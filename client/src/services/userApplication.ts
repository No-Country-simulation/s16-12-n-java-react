import { axiosClient } from '@/lib/axiosClient';
import { ApplicationData } from '@/types/types';

export const updateApplication = async (token: string, id: number) => {
  try {
    const res = await axiosClient.put(`/api/v1/propuestas/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    console.error('Error al editar la propuesta:', error);
    throw error;
  }
};

export const deleteApplication = async (token: string, id: number) => {
  try {
    const res = await axiosClient.delete(`/api/v1/propuestas/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    console.error('Error al eliminar la propuesta:', error);
    throw error;
  }
};

export const createApplication = async (
  token: string,
  applicationData: ApplicationData
): Promise<any> => {
  try {
    const res = await axiosClient.post(
      '/api/v1/propuestas/save',
      applicationData,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return res.data;
  } catch (error) {
    console.error('Error al crear la propuesta:', error);
    throw error;
  }
};

export const getApplicationByTask = async (token: string, tareaId: number) => {
  try {
    const res = await axiosClient.get(
      `/api/v1/propuestas/findByTarea/${tareaId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return res.data;
  } catch (error) {
    console.error('Error al obtener las propuestas:', error);
    throw error;
  }
};

export const getApplicationById = async (token: string, id: number) => {
  try {
    const res = await axiosClient.get(`/api/v1/propuestas/findById/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    console.error('Error al obtener la propuesta:', error);
    throw error;
  }
};

export const getApplicationUser = async (token: string) => {
  try {
    const res = await axiosClient.get('/api/v1/propuestas/findByFreelance', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data.content;
  } catch (error) {
    console.error('Error al obtener las propuestas del usuario:', error);
    throw error;
  }
};
