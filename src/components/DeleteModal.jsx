import { useDeleteModalStore } from "../store/DeleteModalStore"
import { useNoteStore } from "../store/NoteStore";

export default function DeleteModal(){
  const {isModalOpen, setIsDModalOpen} = useDeleteModalStore();
  const {deleteNote, deleteId} = useNoteStore();
  return (
    <div>
      {isModalOpen && (
        <div className="delete-modal">
          <div className="delete-modal-content">
            <div className="modal-header">
              <p className="header-s">Delete note</p>
              <button onClick={() => {
                setIsDModalOpen(false)
              }} className="btn-close">
                <img src="/icons/close.svg" />
              </button>
            </div>
            <div className="modal-body mt-23">
              <p className="body">Are you sure you want to delete this note?</p>
              <div className="modal-footer">
                <button onClick={() => setIsDModalOpen(false)} className="btn-cancel button">Cancel</button>
                <button onClick={() => {
                  setIsDModalOpen(false);
                  deleteNote(deleteId)
                }} className="btn-delete-modal button">Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}