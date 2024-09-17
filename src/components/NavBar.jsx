import { useState } from "react";
import { useModalStore } from "../store/ModalStore";
import Modal from "./Modal";
import { useNoteStore } from "../store/NoteStore";

export default function NavBar(){
  const { setIsModalOpen } = useModalStore();
  const {searchValue, setSearchValue} = useNoteStore();
  return (
    <div className="navbar-container">
      <div className="box">
        <input 
          type="search"
          className="icon body"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={() => setIsModalOpen(true)} className="btn-add">
          <img src="/icons/add.svg" className="btn-icon" alt="add icon" />
          <span className="btn=text button">Add</span>
        </button>
      </div>
      <Modal  />
    </div>
  );
}