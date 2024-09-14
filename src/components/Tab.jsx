import { useState } from "react";
import Card from "./Card";
import { initialNotes } from "../utils/InitialNotes";

const categories = ['all', 'personal', 'home', 'business'];


export default function Tab(){
  const [isActive, setIsActive] = useState(0);
  const [notes, setNotes] = useState(initialNotes);
  const tabContent = [
    notes,
    notes.filter(note => note.category === 'personal'),
    notes.filter(note => note.category === 'home'),
    notes.filter(note => note.category === 'business'),
  ]
  console.log(tabContent)
  return (
    <div className="tab">
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