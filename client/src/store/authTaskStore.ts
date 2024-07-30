import { create } from 'zustand';
import Cookies from 'js-cookie';
import {
  getCategoryData,
  getDateData,
  getPriceData,
  getRangeDate,
  getTasksData,
} from '@/services/authUser';
import { TaskData, TaskResponseData } from '@/types/types';
import { getApplicationUser } from '@/services/userApplication';
import { createTask } from '@/services/createTask';
import { editTask } from '@/services/updateTask';
import { deleteTask } from '@/services/deleteTask';

interface AuthTaskState {
  token: string | null;
  isLoading: boolean;
  error: string | null;
  userTasks: TaskResponseData[] | null;
  userApplication: any;
  rangeDateData: any;
  priceData: any;
  dateData: any;
  categoryData: any;
  fetchUserTasks: () => Promise<void>;
  fetchUserApplication: () => Promise<void>;
  fetchRangeDateData: () => Promise<void>;
  fetchPriceData: () => Promise<void>;
  fetchDateData: () => Promise<void>;
  fetchCategoryData: () => Promise<void>;
  createTask: (taskData: TaskData) => Promise<any>;
  editTask: (id: number) => Promise<any>;
  deleteTask: (id: number) => Promise<void>;
  clearError: () => void;
}

const useAuthTaskStore = create<AuthTaskState>((set, get) => {
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
    userTasks: null,
    userApplication: null,
    rangeDateData: null,
    priceData: null,
    dateData: null,
    categoryData: null,

    fetchUserTasks: async () => {
      const { token } = get();
      if (!token) {
        set({ error: 'No se encontró el token de autenticación' });
        return;
      }
      const data = await handleApiCall(
        () => getTasksData(token),
        'Error al obtener tareas del usuario'
      );
      if (data) set({ userTasks: data });
    },

    fetchUserApplication: async () => {
      const { token } = get();
      if (!token) {
        set({ error: 'No se encontró el token de autenticación' });
        return;
      }
      const data = await handleApiCall(
        () => getApplicationUser(token),
        'Error al obtener propuestas del usuario'
      );
      if (data) set({ userApplication: data });
    },

    fetchRangeDateData: async () => {
      const { token } = get();
      if (!token) {
        set({ error: 'No se encontró el token de autenticación' });
        return;
      }
      const data = await handleApiCall(
        () => getRangeDate(token),
        'Error al obtener datos por rango de fecha'
      );
      if (data) set({ rangeDateData: data });
    },

    fetchPriceData: async () => {
      const { token } = get();
      if (!token) {
        set({ error: 'No se encontró el token de autenticación' });
        return;
      }
      const data = await handleApiCall(
        () => getPriceData(token),
        'Error al obtener datos por rango de precio'
      );
      if (data) set({ priceData: data });
    },

    fetchDateData: async () => {
      const { token } = get();
      if (!token) {
        set({ error: 'No se encontró el token de autenticación' });
        return;
      }
      const data = await handleApiCall(
        () => getDateData(token),
        'Error al obtener datos de fecha de publicación'
      );
      if (data) set({ dateData: data });
    },

    fetchCategoryData: async () => {
      const { token } = get();
      if (!token) {
        set({ error: 'No se encontró el token de autenticación' });
        return;
      }
      const data = await handleApiCall(
        () => getCategoryData(token),
        'Error al obtener datos de categoría'
      );
      if (data) set({ categoryData: data });
    },

    createTask: async (taskData: TaskData) => {
      const { token } = get();
      if (!token) {
        set({ error: 'No se encontró el token de autenticación' });
        return;
      }
      return handleApiCall(
        () => createTask(token, taskData),
        'Error al crear la tarea'
      );
    },

    editTask: async (id: number) => {
      const { token } = get();
      if (!token) {
        set({ error: 'No se encontró el token de autenticación' });
        return;
      }
      return handleApiCall(
        () => editTask(token, id),
        'Error al editar la tarea'
      );
    },

    deleteTask: async (id: number) => {
      const { token } = get();
      if (!token) {
        set({ error: 'No se encontró el token de autenticación' });
        return;
      }
      await handleApiCall(
        () => deleteTask(token, id),
        'Error al eliminar la tarea'
      );
    },

    clearError: () => set({ error: null }),
  };
});

export default useAuthTaskStore;
