import { create } from "zustand";

export const useDropDownStore = create((set) => ({
  isOpen: false,
  setIsOpen: (flag) => set(() => ({
    isOpen: flag,
  })),
  selectedOption: 'Personal',
  setSelectedOption: (option) => set(() => ({
    selectedOption: option
  }))
}))