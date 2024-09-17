import { useEffect, useRef } from "react";
import { useDropDownStore } from "../store/DropDownStore"
import { useNoteStore } from "../store/NoteStore";

export default function DropDown({options}){
  const { 
    isOpen, 
    setIsOpen, 
    selectedOption, 
    setSelectedOption
  } = useDropDownStore();
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option.toLowerCase());
  };
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log(!dropdownRef.current.contains(event.target))
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Close if clicked outside
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef])
  

  return (
    <div ref={dropdownRef} className="custom-dropdown">
      <div className="wrapper">
        <div className="select-box">
          {selectedOption}
        </div>
        <button onClick={toggleDropdown} className="btn-arrow">
          <img src={`/icons/${isOpen ? 'up' : 'down'}_arrow.svg`} />
        </button>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-option"
              onClick={() => selectOption(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}