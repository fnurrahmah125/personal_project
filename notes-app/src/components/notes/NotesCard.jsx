import NotesFavoriteBtn from "./NotesFavoriteBtn";
import NotesDeleteBtn from "./NotesDeleteBtn";
import NotesEditBtn from "./NotesEditBtn";

function NotesCard({
  id,
  title,
  text,
  createdAt,
  favorite,
  display,
  onDeleteNote,
  onFavoriteNote,
  onEditNote,
}) {
  return (
    <div
      className="bg-[#EBBD71] h-80 rounded-md p-4 lg:px-5 flex-col justify-between text-slate-700"
      data-display={display}
    >
      <div>
        <div className="text-end">
          <NotesFavoriteBtn
            id={id}
            favorite={favorite}
            onFavoriteNote={onFavoriteNote}
          />
        </div>
        <div className="text-2xl mb-2 font-medium overflow-hidden">{title}</div>
        <div className="font-light max-h-36 text-sm tracking-wide leading-relaxed overflow-y-scroll ">
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
