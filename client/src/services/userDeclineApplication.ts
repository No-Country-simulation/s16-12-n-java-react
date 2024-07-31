import { axiosClient } from '@/lib/axiosClient';

export const declineApplication = async (
  token: string,
  tareaId: number,
  propuestaId: number
) => {
  try {
    const res = await axiosClient.put(
      '/api/v1/tareas/declinePropuesta',
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
    console.error('Error al rechazar la propuesta:', error);
    throw error;
  }
};
