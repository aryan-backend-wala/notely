import { create } from "zustand";
import { initialNotes } from "../utils/InitialNotes";

export const useNoteStore = create((set) => ({
  notes: initialNotes,
  addNote: (newNote) => set((state) => ({
    notes: [...state.notes, {...newNote}]
  })),
  deleteNote: (id) => set((state) => ({
    notes: state.notes.filter(note => note.id !== id)
  })),
  isDone: false,
  editIsDone: (id) => set((state) => ({
    notes: state.notes.map(note => (
      note.id === id ? {...note, isDone: !note.isDone} : note
    ))
  }))
}))