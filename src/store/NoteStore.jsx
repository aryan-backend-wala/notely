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
  editIsDone: (id) => set((state) => ({
    notes: state.notes.map(note => (
      note.id === id ? {...note, isDone: !note.isDone} : note
    ))
  })),
  noteToEdit: null,
  noteToFind: (id) => set((state) => ({
    noteToEdit: {...state.notes.find(note => note.id === id)}
  })),
  updateNote: (id, updateNote) => set((state) => ({
    notes: state.notes.map(note => 
      note.id === id ? {...note, ...updateNote} : note
    )
  })),
  resetNoteToEdit: () => set((state) => ({
    noteToEdit: null
  }))
}))