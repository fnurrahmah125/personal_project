function SearchContainer({ children }) {
  return (
    <div
      id="search-container"
      className="max-w-screen-lg 2xl:max-w-screen-xl m-auto py-4 px-4 md:px-6 lg:py-6 after:content-[''] after:border-b after:border-slate-200 after:absolute after:w-full after:left-0  after:right-0 after:top-20 lg:after:top-[90px] flex gap-3 dark:after:border-slate-700/70"
    >
      {children}
    </div>
  );
}

export default SearchContainer;
