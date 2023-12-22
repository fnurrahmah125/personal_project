import NotesFavoriteBtn from "./NotesFavoriteBtn";
import NotesDeleteBtn from "./NotesDeleteBtn";
import NotesEditBtn from "./NotesEditBtn";

function NotesCard({
  id,
  title,
  text,
  color,
  createdAt,
  favorite,
  display,
  onDeleteNote,
  onFavoriteNote,
  onEditNote,
}) {
  return (
    <div
      id="note-card"
      className="h-80 rounded-md p-4 lg:px-5 flex-col justify-between text-slate-800"
      data-display={display}
      data-color={color}
    >
      <div>
        <div className="text-end">
          <NotesFavoriteBtn
            id={id}
            favorite={favorite}
            onFavoriteNote={onFavoriteNote}
          />
        </div>
        <div className="note-title text-2xl mb-2 font-medium overflow-hidden break-words">
          {title}
        </div>
        <div className="font-light h-[174px] text-sm tracking-wide leading-relaxed overflow-y-scroll whitespace-pre-wrap break-words">
          {text}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-sm font-reguler">{createdAt}</div>
        <div>
          <NotesDeleteBtn id={id} onDeleteNote={onDeleteNote} />
          <NotesEditBtn id={id} onEditNote={onEditNote} />
        </div>
      </div>
    </div>
  );
}

export default NotesCard;
