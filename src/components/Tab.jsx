import { useState } from "react";
import Card from "./Card";
import { useNoteStore } from "../store/NoteStore";
import { useShowAllStore } from "../store/ShowAll";

const categories = ['all', 'personal', 'home', 'business'];


export default function Tab(){
  const [isActive, setIsActive] = useState(0);
  const {showAll, setShowAll} = useShowAllStore();
  const {notes} = useNoteStore();

  const tabContent = [
    showAll ? notes.filter(note => note.isDone) :
      notes,
    showAll ? notes.filter(note => note.category === 'personal' && note.isDone) :
      notes.filter(note => note.category === 'personal'),
    showAll ? notes.filter(note => note.category === 'home' && note.isDone) :
      notes.filter(note => note.category === 'home'),
    showAll ? notes.filter(note => note.category === 'business' && note.isDone) :
      notes.filter(note => note.category === 'business'),
  ]
  
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
        </div>
      </div>
    </div>
  );
}