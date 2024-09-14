import { create } from "zustand";
import { initialNotes } from "../utils/InitialNotes";

export const useNoteStore = create((set) => ({
  notes: initialNotes
}))