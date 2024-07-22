import { create } from 'zustand';
import Cookies from 'js-cookie';
import { loginUser, registerUser } from '@/services/authUser';
import { UserData } from '@/types/types';

interface AuthStoreState {
  token: string | null;
  isLoading: boolean;
  error: string | null;
  user: any;
  booksData: any;
  login: (userData: Pick<UserData, 'email' | 'contrasena'>) => Promise<string>;
  register: (userData: UserData) => Promise<string>;
  logout: () => void;
  clearError: () => void;
  isAuthenticated: () => boolean;
}

const useAuthStore = create<AuthStoreState>((set, get) => {
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

  const setToken = (token: string) => {
    Cookies.set('authToken', token, { expires: 7 });
    set({ token });
  };

  return {
    token: Cookies.get('authToken') || null,
    isLoading: false,
    error: null,
    user: null,
    booksData: null,

    login: async (userData: Pick<UserData, 'email' | 'contrasena'>) => {
      const res = await handleApiCall(
        () => loginUser(userData),
        'Error al iniciar sesión'
      );
      const token = res.token || res;
      setToken(token);
      return token;
    },

    register: async (userData: UserData) => {
      await handleApiCall(
        () => registerUser(userData),
        'Error al registrar usuario'
      );
      return get().login(userData);
    },

    logout: () => {
      Cookies.remove('authToken');
      set({ token: null, user: null, booksData: null });
    },

    clearError: () => set({ error: null }),

    isAuthenticated: () => !!get().token,
  };
});

export default useAuthStore;
