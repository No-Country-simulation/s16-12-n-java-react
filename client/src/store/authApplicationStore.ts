import { create } from 'zustand';
import Cookies from 'js-cookie';
import { ApplicationFormData } from '@/types/types';
import {
  updateApplication,
  deleteApplication,
  createApplication,
  getApplicationByTask,
  getApplicationById,
  getApplicationUser,
} from '@/services/userApplication';

interface AuthApplicationState {
  token: string | null;
  isLoading: boolean;
  error: string | null;
  userApplications: any[] | null;
  applicationByTask: any[] | null;
  applicationById: any | null;
  fetchUserApplications: () => Promise<void>;
  fetchApplicationByTask: (tareaId: number) => Promise<void>;
  fetchApplicationById: (id: number) => Promise<void>;
  createApplication: (applicationData: ApplicationFormData) => Promise<any>;
  updateApplication: (id: number) => Promise<any>;
  deleteApplication: (id: number) => Promise<void>;
  clearError: () => void;
}

const useAuthApplicationStore = create<AuthApplicationState>((set, get) => {
  const handleApiCall = async (
    apiCall: () => Promise<any>,
    errorMessage: string
  ) => {
    set({ isLoading: true, error: null });
    try {
      const result = await apiCall();
      set({ isLoading: false });
      return result;
    } catch (error: any) {
      set({ error: error.message || errorMessage, isLoading: false });
      throw error;
    }
  };

  return {
    token: Cookies.get('authToken') || null,
    isLoading: false,
    error: null,
    userApplications: null,
    applicationByTask: null,
    applicationById: null,

    fetchUserApplications: async () => {
      const { token } = get();
      if (!token) {
        set({ error: 'No se encontró el token de autenticación' });
        return;
      }
      const data = await handleApiCall(
        () => getApplicationUser(token),
        'Error al obtener las propuestas del usuario'
      );
      if (data) set({ userApplications: data });
    },

    fetchApplicationByTask: async (tareaId: number) => {
      const { token } = get();
      if (!token) {
        set({ error: 'No se encontró el token de autenticación' });
        return;
      }
      const data = await handleApiCall(
        () => getApplicationByTask(token, tareaId),
        'Error al obtener las propuestas por tarea'
      );
      if (data) set({ applicationByTask: data });
    },

    fetchApplicationById: async (id: number) => {
      const { token } = get();
      if (!token) {
        set({ error: 'No se encontró el token de autenticación' });
        return;
      }
      const data = await handleApiCall(
        () => getApplicationById(token, id),
        'Error al obtener la propuesta por ID'
      );
      if (data) set({ applicationById: data });
    },

    createApplication: async (applicationData: ApplicationFormData) => {
      const { token } = get();
      if (!token) {
        set({ error: 'No se encontró el token de autenticación' });
        return;
      }
      return handleApiCall(
        () => createApplication(token, applicationData),
        'Error al crear la propuesta'
      );
    },

    updateApplication: async (id: number) => {
      const { token } = get();
      if (!token) {
        set({ error: 'No se encontró el token de autenticación' });
        return;
      }
      return handleApiCall(
        () => updateApplication(token, id),
        'Error al actualizar la propuesta'
      );
    },

    deleteApplication: async (id: number) => {
      const { token } = get();
      if (!token) {
        set({ error: 'No se encontró el token de autenticación' });
        return;
      }
      await handleApiCall(
        () => deleteApplication(token, id),
        'Error al eliminar la propuesta'
      );
    },

    clearError: () => set({ error: null }),
  };
});

export default useAuthApplicationStore;
