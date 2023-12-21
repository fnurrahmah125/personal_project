import "./styles/index.scss";

import SearchContainer from "./components/search/SearchContainer";
import SearchBar from "./components/search/SearchBar";
import ToggleButton from "./components/button/ToggleButton";
import AddButton from "./components/button/AddButton";
import FormAdd from "./components/form/FormAdd";
import FormEdit from "./components/form/FormEdit";
import Notes from "./components/notes/Notes";
import Footer from "./components/footer/Footer";

import { useState, useEffect } from "react";
import $ from "jquery";

function App() {
  const getData = JSON.parse(localStorage.getItem("notes"));
  const notesData = getData
    ? getData.map((item) => (item ? { ...item, display: "visible" } : item))
    : [];

  const [notes, setNotes] = useState(notesData);
  const [searchNote, setSearchNote] = useState("");
  const [selectedNote, setSelectedNote] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    isOpen || isEditing
      ? $("body").addClass("overlay-open")
      : $("body").removeClass("overlay-open");
  });

  function handleForm() {
    setIsOpen(true);
  }

  function handleOverlay() {
    setIsOpen(false);
    setIsEditing(false);
  }

  function handleAddNote(note) {
    setNotes([...notes, note]);
  }

  function handleDeleteNote(id) {
    setNotes((notes) => notes.filter((note) => note.id !== id));
  }

  function handleFavoriteNote(id) {
    setNotes((notes) =>
      notes.map((note) =>
        note.id === id ? { ...note, favorite: !note.favorite } : note
      )
    );
  }

  function handleSearchNote(term) {
    setSearchNote(term);
    setNotes((notes) =>
      notes.map((note) => {
        const title = note.title.toLowerCase().includes(term.toLowerCase());
        return title
          ? { ...note, display: "visible" }
          : { ...note, display: "invisible" };
      })
    );
  }

  function handleClearSearch() {
    setSearchNote("");
    setNotes((notes) =>
      notes.map((note) => (note ? { ...note, display: "visible" } : note))
    );
  }

  function handleEditNote(id) {
    const currentData = notes.find((note) => note.id === id);
    setSelectedNote(currentData);
    setIsEditing(true);
  }

  function handleUpdateNote(data) {
    setNotes((notes) =>
      notes.map((note) =>
        note.id === data.id
          ? {
              ...note,
              title: data.title,
              text: data.text,
              createdAt: data.createdAt,
            }
          : note
      )
    );
  }

  return (
    <>
      <SearchContainer>
        <SearchBar
          searchNote={searchNote}
          onSearchNote={handleSearchNote}
          onClearSearch={handleClearSearch}
        />
        <ToggleButton />
      </SearchContainer>
      <FormAdd
        isOpen={isOpen}
        onHandleOverlay={handleOverlay}
        onAddNote={handleAddNote}
      />
      <FormEdit
        isEditing={isEditing}
        selectedNote={selectedNote}
        onHandleOverlay={handleOverlay}
        onUpdateNote={handleUpdateNote}
      />
      <Notes
        notes={notes}
        onDeleteNote={handleDeleteNote}
        onFavoriteNote={handleFavoriteNote}
        onEditNote={handleEditNote}
      />
      <AddButton onHandleForm={handleForm} />
      <Footer />
    </>
  );
}

export default App;
