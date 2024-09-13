export default function Card(){
  return (
    <div className="card">
      <div className="card-header">
        <div className="chip body-2">Buisness</div>
        <div className="card-icons">
          <button className="card-btn">
            <img src="/icons/checkbox.svg" className="card-icon" />
          </button>
          <button className="card-btn">
            <img src="/icons/edit.svg" className="card-icon" />
          </button>
          <button className="card-btn">
            <img src="/icons/delete.svg" className="card-icon" />
          </button>
        </div>
      </div>
      <p className="header-s mb-10">Finish the task on the board</p>
      <p className="body card-sub-text">Remember to finish task on the board. After finishing give for evaluation Matt.</p>
      <p className="card-date body-2">22.01.2023</p>
    </div>
  );
}