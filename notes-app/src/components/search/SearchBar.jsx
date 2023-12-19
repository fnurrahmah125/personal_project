function SearchBar({ searchNote, onHandleSearch, onHandleClear }) {
  return (
    <form
      role="search"
      className="ring-1 ring-slate-200 rounded-full relative h-10 grow dark:ring-white/10"
    >
      <span className="icon-search text-slate-300 absolute left-4 inset-y-2 dark:text-slate-500"></span>
      <input
        type="text"
        value={searchNote}
        placeholder="Enter the note title"
        className="placeholder:text-slate-300 placeholder:font-light pl-10 pr-10 py-2 w-full h-full rounded-full focus:outline-none focus:ring-sky-500 focus:ring-2 text-slate-500 bg-white dark:bg-slate-800/90 dark:placeholder:text-slate-500 dark:text-slate-200"
        onChange={(e) => onHandleSearch(e.target.value)}
      />
      <a
        className="absolute right-0 top-0 w-9 h-full before:content-[''] before:absolute before:top-2 before:right-6 before:w-[2px] before:h-5 before:bg-slate-300 before:rotate-45 after:content-[''] after:absolute after:top-2 after:right-6 after:w-[2px] after:h-5 after:bg-slate-300 after:-rotate-45 hover:cursor-pointer dark:before:bg-slate-500 dark:after:bg-slate-500"
        onClick={() => onHandleClear()}
      ></a>
    </form>
  );
}

export default SearchBar;
