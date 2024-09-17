export default function NoNotesError(){
  return (
    <div>
      <div className="no-notes"> 
        <img 
          src="/icons/no-notes.svg"
        />
        <p className="header-xs">{"You don’t have any completed notes"}</p>
      </div>
    </div>
  );
}