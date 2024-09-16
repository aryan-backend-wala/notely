import { useEffect, useState } from "react";
import DropDown from "./DropDown";
import { useModalStore } from "../store/ModalStore";
import { useDropDownStore } from "../store/DropDownStore";
import { useNoteStore } from "../store/NoteStore";
import { DateTime } from "luxon";

export default function Modal(){
  const [note, setNote] = useState({
    id: new Date().toLocaleTimeString() + new Date().getMilliseconds(),
    title: "",
    description: "",
    category: "personal",
    isDone: false,
    timeStamp: DateTime.now().toISO()
  })
  const options = ['Personal', 'Home', 'Business'];

  
  const { 
    isModalOpen, 
    setIsModalOpen 
  } = useModalStore();
  const {
    updateNote,
    noteToEdit,
    addNote,
    resetNoteToEdit
  } = useNoteStore();
  const { setIsOpen, selectedOption, setSelectedOption } = useDropDownStore();
  useEffect(() => {
    if(noteToEdit){
      setNote(noteToEdit)
    }
  }, [noteToEdit])
  function handleOutsideClick(e) {
    if(e.target.className === 'modal'){
      setIsModalOpen(false);
      setIsOpen(false)
    }
  }
  
  
  function handleAddNote(){
    if(noteToEdit){
      setSelectedOption(noteToEdit.category)
      updateNote(noteToEdit.id, {...note, category: selectedOption})
      setIsModalOpen(false)
    } else {
      addNote({...note, category: selectedOption})
      setSelectedOption('personal')
      setIsModalOpen(false)
    }
    setNote({
      ...note,
      title: "",
      description: "",
      isDone: false,
      id: new Date().toLocaleTimeString() + new Date().getMilliseconds(),
    })
    resetNoteToEdit()
  }
  return (
    <div>
      { isModalOpen && 
        <div onClick={handleOutsideClick} className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <p className="header-s">Add note</p>
              <button onClick={() => {
                setIsModalOpen(false)
                setIsOpen(false)
              }} className="btn-close">
                <img src="/icons/close.svg" />
              </button>
            </div>
            <div className="modal-body">
              <div className="title-description">
                <label className="button">
                  Title
                  <input 
                    className="body"
                    id="title"
                    type="text"
                    placeholder="Add title"
                    value={note.title}
                    onChange={(e) => setNote({...note, title: e.target.value})}
                  />
                </label>
                <label className="button">
                  Category
                  <DropDown options={options} />
                </label>
              </div>
              <div className="textbox-header">
                <label className="body" htmlFor="description">
                  Description
                  <span className="optional">(optional)</span>
                </label>
                <p className="body-2 p-200">0/200</p>
              </div>
              <textarea 
                className="description body-3"
                placeholder="Add description"
                value={note.description}
                onChange={(e) => setNote({...note, description: e.target.value})}
              />
              <div className="modal-footer">
                <button onClick={() => setIsModalOpen(false)} className="btn-cancel button">Cancel</button>
                <button onClick={handleAddNote} className="btn-add-modal button">{
                  noteToEdit ? "Save" : "Add"}</button>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

// &times;