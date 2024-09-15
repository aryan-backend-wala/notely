import { useState } from "react";

export default function Modal(){
  const [isModalOpen, setIsModalOpen] = useState(true);

  function handleOutsideClick(e) {
    if(e.target.className === 'modal'){
      setIsModalOpen(false);
    }
  }

  return (
    <div>
      { 
        <div onClick={handleOutsideClick} className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <p className="header-s">Add note</p>
              <button className="btn-close">
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
                  <select
                    id="category"
                    value={'personal'}
                    className="body"
                  >
                    <option value="personal">Personal</option>
                    <option value="home">Home</option>
                    <option value="business">Business</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

// &times;