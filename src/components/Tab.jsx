import { useEffect, useState } from "react";
import NoNotesError from "./NoNotesError"
import Card from "./Card";
import { useNoteStore } from "../store/NoteStore";
import { useShowAllStore } from "../store/ShowAll";

const categories = ['all', 'personal', 'home', 'business'];


export default function Tab(){
  const [isActive, setIsActive] = useState(0);
  const {showAll, setShowAll} = useShowAllStore();
  const {notes, searchValue} = useNoteStore();
   const filteredNotes = notes.filter((note) => 
    note.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  const tabContent = [
    showAll ? filteredNotes.filter(note => note.isDone) :
      filteredNotes,
    showAll ? filteredNotes.filter(note => note.category === 'personal' && note.isDone) :
      filteredNotes.filter(note => note.category === 'personal'),
    showAll ? filteredNotes.filter(note => note.category === 'home' && note.isDone) :
      filteredNotes.filter(note => note.category === 'home'),
    showAll ? filteredNotes.filter(note => note.category === 'business' && note.isDone) :
      filteredNotes.filter(note => note.category === 'business'),
  ];
  
  return (
    <div className="tab">
      <div className="tab-h">
        <div className="tab_header">
          {
            categories
              .map((category, index) => (
                <div className={`${index === isActive ? 'active' : 'not-active'} category button`} key={index}>
                  <li onClick={() => setIsActive(index)}>{category}</li>
                </div>
              ))
          }
        </div>
        <div className="checkbox-text">
          <button onClick={() => setShowAll()} className="card-btn">
            <img 
              className="card-icon" 
              src={`/icons/checkbox${showAll ? "-tick" : ""}.svg`} />
          </button>
          <p className="body">Show only completed notes</p>
        </div>
      </div>
      <div className="tab_container">
        {
          tabContent[isActive].length > 0 ?
          <div className="tab_content">
          {
            tabContent[isActive].map(
              note => (
                <Card 
                  key={note.id}
                  note={note}
                />
              )
            )
          }
        </div> : 
          <NoNotesError />
        }
      </div>
    </div>
  );
}
// tabContent[isActive]