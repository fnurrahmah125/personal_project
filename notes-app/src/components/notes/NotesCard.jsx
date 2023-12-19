import NotesFavoriteBtn from "./NotesFavoriteBtn";
import NotesDeleteBtn from "./NotesDeleteBtn";
import NotesViewBtn from "./NotesViewBtn";

function NotesCard({
  id,
  title,
  text,
  createdAt,
  favorite,
  display,
  onHandleDelete,
  onHandleFavorite,
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
            onHandleFavorite={onHandleFavorite}
          />
        </div>
        <div className="text-2xl mb-2 font-medium">{title}</div>
        <div className="font-light text-sm tracking-wide leading-relaxed">
          {text}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-sm font-reguler">{createdAt}</div>
        <div>
          <NotesDeleteBtn id={id} onHandleDelete={onHandleDelete} />
          <NotesViewBtn id={id} />
        </div>
      </div>
    </div>
  );
}

export default NotesCard;
