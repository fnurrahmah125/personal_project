function NotesViewBtn() {
  return (
    <button className="tooltip cursor-pointer relative">
      <span className="icon-eye text-lg"></span>
      <span className="tooltip-text bg-slate-800 text-white text-xs font-light py-1 px-4 rounded-md absolute -right-8 bottom-full w-max dark:bg-white dark:text-slate-800">
        View note
      </span>
    </button>
  );
}

export default NotesViewBtn;
