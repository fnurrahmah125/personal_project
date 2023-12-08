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

  // change all display value to visible
  const newData = data.map((data) =>
    data ? { ...data, display: "visible" } : data
  );

  // assign new array
  const bookshelf = data ? newData : [];

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

  function handleSearchBook(term) {
    setSearchBook(term);
    setBooks((books) =>
      books.map((book) => {
        const title = book.title.toLowerCase().includes(term.toLowerCase());
        return title
          ? { ...book, display: "visible" }
          : { ...book, display: "hidden" };
      })
    );
  }

  function handleFilterBook(term) {
    setBooks((books) =>
      books.map((book) => {
        switch (term) {
          case "finished":
            return book.checked
              ? { ...book, display: "visible" }
              : { ...book, display: "hidden" };
          case "unfinished":
            return !book.checked
              ? { ...book, display: "visible" }
              : { ...book, display: "hidden" };
          default:
            return { ...book, display: "visible" };
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
        onFilterBook={handleFilterBook}
      />
      <FooterSection />
    </div>
  );
}

export default App;
