import "./styles/main.scss";

import GridContainer from "./components/container/GridContainer";
import HeaderSection from "./components/header/HeaderSection";
import AddSection from "./components/add/AddSection";
import SearchSection from "./components/search/SearchSection";
import ResultSection from "./components/result/ResultSection";
import FooterSection from "./components/footer/FooterSection";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function App() {
  // retrieve data from local storage
  const data = JSON.parse(localStorage.getItem("books"));
  const bookshelf = data ? data : [];

  const [books, setBooks] = useState(bookshelf);
  const [searchBook, setSearchBook] = useState("");

  // assign value in local storage
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  function handleAddBook(book) {
    setBooks([...books, book]);

    Swal.fire({
      title: "Success",
      text: "Data saved successfully!",
      icon: "success",
      confirmButtonText: "Okay",
    });
  }

  function handleDeleteBook(id) {
    Swal.fire({
      title: "Are you sure you want to delete the book?",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        setBooks((books) => books.filter((book) => book.id !== id));
        Swal.fire({
          title: "Success",
          text: "The book has been deleted!",
          icon: "success",
          confirmButtonText: "Okay",
        });
      }
    });
  }

  function handleToggleBook(id) {
    setBooks((books) =>
      books.map((book) =>
        book.id === id ? { ...book, checked: !book.checked } : book
      )
    );
  }

  function handleSearchBook(item) {
    setSearchBook(item);
    setBooks((books) =>
      books.map((book) => {
        const title = book.title.toLowerCase().includes(item.toLowerCase());
        if (title) {
          return { ...book, display: "visible" };
        } else {
          return { ...book, display: "hidden" };
        }
      })
    );
  }

  return (
    <div className="app">
      <HeaderSection />
      <GridContainer>
        <AddSection onAddBook={handleAddBook} />
        <SearchSection
          searchBook={searchBook}
          onSearchBook={handleSearchBook}
        />
      </GridContainer>
      <ResultSection
        books={books}
        onDeleteBook={handleDeleteBook}
        onToggleBook={handleToggleBook}
      />
      <FooterSection />
    </div>
  );
}

export default App;
