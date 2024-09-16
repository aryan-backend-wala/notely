import { create } from "zustand";

export const useDropDownStore = create((set) => ({
  isOpen: false,
  setIsOpen: (flag) => set(() => ({
    isOpen: flag,
  })),
  selectedOption: 'personal',
  setSelectedOption: (option) => set(() => ({
    selectedOption: option
  }))
}))