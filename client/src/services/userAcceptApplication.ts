import { axiosClient } from '@/lib/axiosClient';

export const acceptApplication = async (
  token: string,
  tareaId: number,
  propuestaId: number
) => {
  try {
    const res = await axiosClient.put(
      '/api/v1/tareas/acceptPropuesta',
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          tareaId,
          propuestaId,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error('Error al aceptar la propuesta:', error);
    throw error;
  }
};
