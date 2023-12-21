import "./styles/main.scss";

import GridContainer from "./components/container/GridContainer";
import HeaderSection from "./components/header/HeaderSection";
import AddSection from "./components/add/AddSection";
import SearchSection from "./components/search/SearchSection";
import ResultSection from "./components/result/ResultSection";
import ClearSection from "./components/clear/ClearSection";
import FooterSection from "./components/footer/FooterSection";

import { useEffect, useState } from "react";
import { data } from "./utils/data";
import Swal from "sweetalert2";
import $ from "jquery";

const dummyData = data;

function App() {
  // retrieve data from local storage
  const data = JSON.parse(localStorage.getItem("books"));

  // assign new array
  const bookshelf = data
    ? data.map((data) => (data ? { ...data, display: "visible" } : data))
    : [];

  const [books, setBooks] = useState(bookshelf);
  const [searchBook, setSearchBook] = useState("");

  // assign value in local storage
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  function handleAddBook(book) {
    const title = book.title.toLowerCase();
    const findTitle = books.find((book) => book.title.toLowerCase() === title);

    if (findTitle !== undefined) {
      Swal.fire({
        title: "Oops...",
        text: "The book already exist.",
        icon: "error",
        showConfirmButton: true,
        confirmButtonColor: "#068fff",
      });
      return;
    }

    setBooks([...books, book]);

    Swal.fire({
      title: "Success",
      text: "Data saved successfully!",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  function handleDeleteBook(id) {
    Swal.fire({
      title: "Are you sure you want to delete the book?",
      showCancelButton: true,
      confirmButtonText: "Delete",
      confirmButtonColor: "#068fff",
      cancelButtonColor: "#dc3545",
      customClass: {
        title: "popup-title",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setBooks((books) => books.filter((book) => book.id !== id));
        Swal.fire({
          title: "Success",
          text: "The book has been deleted!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
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

  function handleDummyData(val) {
    const newDummyData = [];

    if (val) {
      dummyData.forEach((data) => {
        const findId = books.find((book) => book.id === data.id);
        if (findId === undefined) {
          newDummyData.push(data);
        }
      });
    }

    setBooks(books.concat(newDummyData));
  }

  function handleEditData(id) {
    (async () => {
      const { value: formValues } = await Swal.fire({
        title: "",
        html: `
          <div class="swal-input">
            <label for="swal-input1">title</label>
            <input id="swal-input1" class="swal2-input" type="text">
          </div>
          <div class="swal-input">
            <label for="swal-input2">author</label>
            <input id="swal-input2" class="swal2-input" type="text">
          </div>
          <div class="swal-input">
            <label for="swal-input3">year</label>
            <input id="swal-input3" class="swal2-input" type="number">
          </div>
        `,
        focusConfirm: false,
        confirmButtonText: "Save",
        confirmButtonColor: "#068fff",
        cancelButtonColor: "#dc3545",
        showCancelButton: true,
        preConfirm: () => {
          return {
            title: $("#swal-input1").val(),
            author: $("#swal-input2").val(),
            year: $("#swal-input3").val(),
          };
        },
      });

      if (formValues) {
        if (formValues.title !== "") {
          setBooks((books) =>
            books.map((book) =>
              book.id === id ? { ...book, title: formValues.title } : book
            )
          );
        }

        if (formValues.author !== "") {
          setBooks((books) =>
            books.map((book) =>
              book.id === id ? { ...book, author: formValues.author } : book
            )
          );
        }

        if (formValues.year !== "") {
          setBooks((books) =>
            books.map((book) =>
              book.id === id ? { ...book, year: formValues.year } : book
            )
          );
        }
      }
    })();
  }

  function handleClearBooks() {
    if (books.length === 0) {
      Swal.fire({
        title: "Oops...",
        text: "The book list is empty",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    Swal.fire({
      title: "Are you sure you want to delete all the books?",
      showCancelButton: true,
      confirmButtonText: "Delete",
      confirmButtonColor: "#068fff",
      cancelButtonColor: "#dc3545",
      customClass: {
        title: "popup-title",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setBooks([]);
        Swal.fire({
          title: "Success",
          text: "All of the books have been deleted!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }

  return (
    <div className="app">
      <HeaderSection books={books} onAddDummy={handleDummyData} />
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
        onEditBook={handleEditData}
      />
      <ClearSection onClearBooks={handleClearBooks} />
      <FooterSection />
    </div>
  );
}

export default App;
