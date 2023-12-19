import NotesTitle from "./NotesTitle";
import NotesWrapper from "./NotesWrapper";
import NotesCard from "./NotesCard";
import NotesSection from "./NotesSection";

function Notes({ notes, onHandleDelete, onHandleFavorite }) {
  const favoritesNotes = notes.filter(
    (note) => (note.favorite === true) & (note.display === "visible")
  );
  const othersNotes = notes.filter(
    (note) => (note.favorite === false) & (note.display === "visible")
  );

  return (
    <div className="min-h-screen max-w-screen-lg 2xl:max-w-screen-xl m-auto px-4 md:px-8 mb-7">
      <NotesTitle />
      <NotesSection title="Favorites" data={favoritesNotes}>
        <NotesWrapper>
          {[...favoritesNotes].reverse().map((note) => (
            <NotesCard
              key={note.id}
              id={note.id}
              title={note.title}
              text={note.text}
              createdAt={note.createdAt}
              favorite={note.favorite}
              display={note.display}
              onHandleDelete={onHandleDelete}
              onHandleFavorite={onHandleFavorite}
            />
          ))}
        </NotesWrapper>
      </NotesSection>
      <NotesSection title="Others" data={othersNotes}>
        <NotesWrapper>
          {[...othersNotes].reverse().map((note) => (
            <NotesCard
              key={note.id}
              id={note.id}
              title={note.title}
              text={note.text}
              createdAt={note.createdAt}
              favorite={note.favorite}
              display={note.display}
              onHandleDelete={onHandleDelete}
              onHandleFavorite={onHandleFavorite}
            />
          ))}
        </NotesWrapper>
      </NotesSection>
    </div>
  );
}

export default Notes;
