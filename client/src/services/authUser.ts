import { axiosClient } from '@/lib/axiosClient';
import { UserData } from '@/types/types';

export const registerUser = async (userData: UserData) => {
  try {
    const res = await axiosClient.post('/api/usuario/auth/register', userData);
    return res.data;
  } catch (error) {
    console.error('Error registrando usuario:', error);
    throw error;
  }
};

export const loginUser = async (
  userData: Pick<UserData, 'email' | 'contrasena'>
) => {
  try {
    const res = await axiosClient.post('/api/usuario/auth/login', userData);
    return res.data;
  } catch (error) {
    console.error('Error iniciando sesión:', error);
    throw error;
  }
};

export const getTasksData = async (token: string) => {
  try {
    const res = await axiosClient.get('/api/v1/tareas/findByUser', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data.content;
  } catch (error) {
    console.error('Error obteniendo datos de las tareas:', error);
    throw error;
  }
};

export const getRangeDate = async (token: string) => {
  try {
    const res = await axiosClient.get('/api/v1/tareas/findByRangeDate', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    console.error('Error obteniendo datos por rango de fecha:', error);
    throw error;
  }
};

export const getPriceData = async (token: string) => {
  try {
    const res = await axiosClient.get('/api/v1/tareas/findByPrice', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    console.error('Error obteniendo datos por rango de precio:', error);
    throw error;
  }
};

export const getDateData = async (token: string) => {
  try {
    const res = await axiosClient.get('/api/v1/tareas/findByDate', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    console.error('Error obteniendo datos de fecha de publicacion:', error);
    throw error;
  }
};

export const getCategoryData = async (token: string) => {
  try {
    const res = await axiosClient.get('/api/v1/tareas/findByCategoria', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    console.error('Error obteniendo datos de categoria:', error);
    throw error;
  }
};
