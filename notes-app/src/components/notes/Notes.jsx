import NotesTitle from "./NotesTitle";
import NotesWrapper from "./NotesWrapper";
import NotesCard from "./NotesCard";
import NotesSection from "./NotesSection";

function Notes({ notes, onDeleteNote, onFavoriteNote, onEditNote }) {
  const favoritesNotes = notes.filter(
    (note) => (note.favorite === true) & (note.display === "visible")
  );
  const othersNotes = notes.filter(
    (note) => (note.favorite === false) & (note.display === "visible")
  );

  return (
    <div
      id="notes"
      className="min-h-screen max-w-screen-lg 2xl:max-w-screen-xl m-auto px-4 md:px-8 mb-7 overflow-hidden"
    >
      <NotesTitle />
      <NotesSection title="Favorites" data={favoritesNotes}>
        <NotesWrapper>
          {[...favoritesNotes].reverse().map((note) => (
            <NotesCard
              key={note.id}
              id={note.id}
              title={note.title}
              text={note.text}
              color={note.color}
              createdAt={note.createdAt}
              favorite={note.favorite}
              display={note.display}
              onDeleteNote={onDeleteNote}
              onFavoriteNote={onFavoriteNote}
              onEditNote={onEditNote}
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
              color={note.color}
              createdAt={note.createdAt}
              favorite={note.favorite}
              display={note.display}
              onDeleteNote={onDeleteNote}
              onFavoriteNote={onFavoriteNote}
              onEditNote={onEditNote}
            />
          ))}
        </NotesWrapper>
      </NotesSection>
    </div>
  );
}

export default Notes;
