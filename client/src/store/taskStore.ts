import { create } from 'zustand';
import { getAllTasks, getTaskById } from '@/services/getTasks';
import { PaginatedResponse, TaskResponseData } from '@/types/types';

interface TaskStoreState {
  allTasks: PaginatedResponse;
  currentTask: TaskResponseData | null;
  isLoading: boolean;
  error: string | null;
  fetchAllTasks: () => Promise<void>;
  fetchTaskById: (id: number) => Promise<void>;
  clearError: () => void;
}

const useTaskStore = create<TaskStoreState>((set) => {
  const handleApiCall = async (
    apiCall: () => Promise<any>,
    errorMessage: string
  ) => {
    set({ isLoading: true });
    try {
      const res = await apiCall();
      set({ isLoading: false, error: null });
      return res;
    } catch (error) {
      set({ error: errorMessage, isLoading: false });
      console.error(error);
      return null;
    }
  };

  return {
    allTasks: {
      content: [],
      totalPages: 0,
      totalElements: 0,
      size: 0,
      number: 0,
      sort: { empty: true, unsorted: true, sorted: false },
      pageable: {
        pageNumber: 0,
        pageSize: 0,
        sort: { empty: true, unsorted: true, sorted: false },
        offset: 0,
        unpaged: false,
        paged: false,
      },
      numberOfElements: 0,
      first: true,
      last: true,
      empty: true,
    },
    currentTask: null,
    isLoading: false,
    error: null,

    fetchAllTasks: async () => {
      const data = await handleApiCall(
        () => getAllTasks(),
        'Error al cargar las tareas'
      );
      if (data) set({ allTasks: data });
    },

    fetchTaskById: async (id: number) => {
      const data = await handleApiCall(
        () => getTaskById(id),
        `Error al cargar libro con id ${id}`
      );
      if (data) set({ currentTask: data });
    },

    clearError: () => set({ error: null }),
  };
});

export default useTaskStore;
