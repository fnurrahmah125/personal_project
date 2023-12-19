import "./styles/index.scss";

import SearchBar from "./components/search/SearchBar";
import ToggleButton from "./components/toggle/ToggleButton";

import AddButton from "./components/button/AddButton";
import Form from "./components/form/Form";
import Notes from "./components/notes/Notes";
import Footer from "./components/footer/Footer";
import { useState, useEffect } from "react";
import $ from "jquery";

function App() {
  const data = JSON.parse(localStorage.getItem("notes"));
  const notesData = data
    ? data.map((data) => (data ? { ...data, display: "visible" } : data))
    : [];

  const [notes, setNotes] = useState(notesData);
  const [formOpen, setFormOpen] = useState(false);
  const [searchNote, setSearchNote] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    formOpen
      ? $("body").addClass("overlay-open")
      : $("body").removeClass("overlay-open");
  });

  function handleForm() {
    setFormOpen(true);
  }

  function handleOverlay() {
    setFormOpen(false);
  }

  function handleAddNote(note) {
    setNotes([...notes, note]);
    setFormOpen(false);
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

  return (
    <>
      <div className="search-bar-container">
        <SearchBar
          searchNote={searchNote}
          onHandleSearch={handleSearchNote}
          onHandleClear={handleClearSearch}
        />
        <ToggleButton />
      </div>

      <Form
        formOpen={formOpen}
        onHandleOverlay={handleOverlay}
        onAddNote={handleAddNote}
      />
      <Notes
        notes={notes}
        onHandleDelete={handleDeleteNote}
        onHandleFavorite={handleFavoriteNote}
      />
      <AddButton onHandleForm={handleForm} />
      <Footer />
    </>
  );
}

export default App;
