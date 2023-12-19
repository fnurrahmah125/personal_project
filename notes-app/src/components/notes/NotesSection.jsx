function NotesSection({ children, title, data }) {
  return (
    <>
      <h2 className="text-xl py-4 border-b border-slate-200 dark:text-white dark:border-slate-700/70">
        {title}
        <span className="text-base py-1 px-3.5 ml-2 inline-block font-medium bg-sky-100 text-blue-600 rounded-md">
          {data.length}
        </span>
      </h2>
      {children}
    </>
  );
}

export default NotesSection;
