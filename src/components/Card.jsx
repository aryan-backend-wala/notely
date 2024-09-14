export default function Card({note}){

  function giveColor(category){
    switch(category){
      case 'business': 
        return "chip-purple"
      case 'home':
        return "chip-green"
      case 'personal':
        return 'chip-orange'
    }
  }

  return (
    <div className="card">
      <div className="card-header">
        <div className={`${giveColor(note.category)} chip body-2`}>{note.category}</div>
        <div className="card-icons">
          <div className="checkbox card-btn">
            <input 
              type="checkbox"
            />
          </div>
          <button className="card-btn">
            <img src="/icons/edit.svg" className="card-icon" />
          </button>
          <button className="card-btn">
            <img src="/icons/delete.svg" className="card-icon" />
          </button>
        </div>
      </div>
      <p className="header-s mb-10">{note.title}</p>
      <p className="body card-sub-text">{note.description}</p>
      <p className="card-date body-2">22.01.2023</p>
    </div>
  );
}