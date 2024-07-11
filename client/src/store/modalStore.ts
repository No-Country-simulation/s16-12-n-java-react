import create from 'zustand';

interface ModalState {
  mostrarRegister: boolean;
  mostrarLogin: boolean;
  setMostrarRegister: (show: boolean) => void;
  setMostrarLogin: (show: boolean) => void;
  handleCloseModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  mostrarRegister: false,
  mostrarLogin: false,
  setMostrarRegister: (show: boolean) => set({ mostrarRegister: show }),
  setMostrarLogin: (show: boolean) => set({ mostrarLogin: show }),
  handleCloseModal: () => set((state) => ({
    mostrarRegister: state.mostrarRegister ? false : state.mostrarRegister,
    mostrarLogin: state.mostrarLogin ? false : state.mostrarLogin,
  })),
}));
