function NotesDeleteBtn({ id, onHandleDelete }) {
  return (
    <button
      className="tooltip cursor-pointer relative"
      onClick={() => onHandleDelete(id)}
    >
      <span className="icon-bin mr-2.5 text-lg"></span>
      <span className="tooltip-text bg-slate-800 text-white text-xs font-light py-1 px-4 rounded-md absolute -right-8 bottom-full w-max dark:bg-white dark:text-slate-800">
        Delete note
      </span>
    </button>
  );
}

export default NotesDeleteBtn;
