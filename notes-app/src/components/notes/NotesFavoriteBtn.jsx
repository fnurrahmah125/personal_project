function NotesFavoriteBtn({ id, favorite, onFavoriteNote }) {
  return (
    <button
      className="tooltip cursor-pointer relative"
      onClick={() => onFavoriteNote(id)}
    >
      {favorite ? (
        <span className="icon-star-full text-2xl"></span>
      ) : (
        <span className="icon-star-empty text-2xl"></span>
      )}

      {favorite ? (
        <span className="tooltip-text bg-slate-800 text-white text-xs font-light py-1 px-4 rounded-md absolute -right-16 bottom-full w-max dark:bg-white dark:text-slate-800">
          {favorite ? "Remove from favorites" : "Add to favorites"}
        </span>
      ) : (
        <span className="tooltip-text bg-slate-800 text-white text-xs font-light py-1 px-4 rounded-md absolute -right-12 bottom-full w-max dark:bg-white dark:text-slate-800">
          {favorite ? "Remove from favorites" : "Add to favorites"}
        </span>
      )}
    </button>
  );
}

export default NotesFavoriteBtn;
