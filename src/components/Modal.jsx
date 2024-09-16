import { useState } from "react";
import DropDown from "./DropDown";
import { useModalStore } from "../store/ModalStore";
import { useDropDownStore } from "../store/DropDownStore";
import { useNoteStore } from "../store/NoteStore";

export default function Modal(){
  const {notes} = useNoteStore();
  const options = [...notes.map(note => note.category)];

  const { isModalOpen, setIsModalOpen } = useModalStore();

  const { setIsOpen } = useDropDownStore();
  function handleOutsideClick(e) {
    if(e.target.className === 'modal'){
      setIsModalOpen(false);
      setIsOpen(false)
    }
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
              />
              <div className="modal-footer">
                <button className="btn-cancel button">Cancel</button>
                <button className="btn-add-modal button">Add</button>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

// &times;