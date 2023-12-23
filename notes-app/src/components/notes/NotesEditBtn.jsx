function NotesEditBtn({ id, onEditNote }) {
  return (
    <button
      id="note-edit-btn"
      className="tooltip cursor-pointer relative"
      onClick={() => onEditNote(id)}
    >
      <span className="icon-pencil text-xl"></span>
      <span className="tooltip-text bg-slate-800 text-white text-xs font-light py-1 px-4 rounded-md absolute -right-8 bottom-full w-max dark:bg-white dark:text-slate-800">
        Edit note
      </span>
    </button>
  );
}

export default NotesEditBtn;
