import { create } from "zustand";

export const useDeleteModalStore = create((set) => ({
  isModalOpen: false,
  setIsDModalOpen: (value) => set((state) => ({
    isModalOpen: value
  }))
}))