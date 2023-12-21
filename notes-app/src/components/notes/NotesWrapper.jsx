function NotesWrapper({ children }) {
  return (
    <div
      id="notes-wrapper"
      className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 lg:gap-5 text-slate-800 my-8"
    >
      {children}
    </div>
  );
}

export default NotesWrapper;
