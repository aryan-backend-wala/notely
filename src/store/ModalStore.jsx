import { create } from "zustand";

export const useModalStore = create((set) => ({
  isModalOpen: false,
  setIsModalOpen: (flag) => set((state) => ({
    isModalOpen: flag,
  }))
}))