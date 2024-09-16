import { useState } from "react";
import {handleISOString} from '../utils/dateFromString'
import { useNoteStore } from "../store/NoteStore";

export default function Card({note}){
  const {deleteNote, editIsDone} = useNoteStore();
  function giveColor(category){
    switch(category){
      case 'business': 
        return "chip-purple"
      case 'home':
        return "chip-green"
      case 'personal':
        return 'chip-orange'
    }
  }
  return (
    <div className={`card ${note.isDone ? 'not-card' : ""}`}>
      <div className="card-header">
        <div className={`${note.isDone ? "not-chip" : giveColor(note.category)} chip body-2`}>{note.category}</div>
        <div className="card-icons">
          <button 
            onClick={() => editIsDone(note.id)} className="card-btn">
            <img 
              
              className="card-icon" 
              src={`/icons/checkbox${note.isDone ? "-tick" : ""}.svg`} />
          </button>
          <button className={`${note.isDone ? 'cursor' : ""} card-btn`}>
            <img src="/icons/edit.svg" className="card-icon" />
          </button>
          <button
            disabled={note.isDone ? true : false}
            onClick={() => deleteNote(note.id)} 
            className={`${note.isDone ? 'cursor' : ""} card-btn`}>
            <img src="/icons/delete.svg" className="card-icon" />
          </button>
        </div>
      </div>
      <p className={`header-s mb-10 ${note.isDone? 'not-text' : ''}`}>{note.title}</p>
      <p className={`body card-sub-text ${note.isDone? 'not-text' : ''}`}>{note.description}</p>
      <p className="card-date body-2">{handleISOString(note.timeStamp)}</p>
    </div>
  );
}