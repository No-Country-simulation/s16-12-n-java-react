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
