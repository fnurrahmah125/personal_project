function NotesDeleteBtn({ id, onDeleteNote }) {
  return (
    <button
      id="note-delete-btn"
      className="tooltip cursor-pointer relative"
      onClick={() => onDeleteNote(id)}
    >
      <span className="icon-bin mr-4 text-lg"></span>
      <span className="tooltip-text bg-slate-800 text-white text-xs font-light py-1 px-4 rounded-md absolute -right-8 bottom-full w-max dark:bg-white dark:text-slate-800">
        Delete note
      </span>
    </button>
  );
}

export default NotesDeleteBtn;
