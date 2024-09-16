import { useModalStore } from "../store/ModalStore";
import Modal from "./Modal";

export default function NavBar(){
  const { setIsModalOpen } = useModalStore();
  return (
    <div className="navbar-container">
      <div className="box">
        <input 
          type="search"
          className="icon body"
          placeholder="Search"
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