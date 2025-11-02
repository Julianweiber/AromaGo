import { create } from 'zustand';

const useStore = create((set) => ({
  perfumes: [],
  setPerfumes: (perfumes) => set({ perfumes }),
  addPerfume: (perfume) => set((state) => ({ 
    perfumes: [...state.perfumes, perfume] 
  })),
  removePerfume: (id) => set((state) => ({
    perfumes: state.perfumes.filter(p => p.id !== id)
  })),
}));

export default useStore;