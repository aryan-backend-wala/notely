import Modal from "./Modal";

export default function NavBar(){
  return (
    <div className="navbar-container">
      <div className="box">
        <input 
          type="search"
          className="icon body"
          placeholder="Search"
        />
        <button className="btn-add">
          <img src="/icons/add.svg" className="btn-icon" alt="add icon" />
          <span className="btn=text button">Add</span>
        </button>
      </div>
      <Modal  />
    </div>
  );
}