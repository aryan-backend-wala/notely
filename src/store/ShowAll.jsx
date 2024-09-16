import { create } from "zustand";

export const useShowAllStore = create((set) => ({
  showAll: false,
  setShowAll: () => set((state) => ({
    showAll: !state.showAll
  }))
}))