import TitleSection from "../title/TitleSection";
import ResultDropdown from "./ResultDropdown";
import ResultCard from "./ResultCard";

function ResultSection({
  books,
  onDeleteBook,
  onToggleBook,
  onFilterBook,
  onEditBook,
}) {
  const bookNotFound =
    books.length !== 0 ? books.find((book) => book.display === "visible") : "";

  return (
    <div className="result-container">
      <div className="result-book">
        <div className="result-book-title">
          <TitleSection text="list of books" />
          <ResultDropdown onFilterBook={onFilterBook} />
        </div>

        <div className="result-book-cards">
          {books.map((book) => (
            <ResultCard
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              year={book.year}
              dataType={book.checked}
              dataDisplay={book.display}
              onDeleteBook={onDeleteBook}
              onToggleBook={onToggleBook}
              onEditBook={onEditBook}
            />
          ))}
        </div>

        {books.length === 0 ? (
          <div className="result-book-empty">the book list is empty</div>
        ) : (
          <div></div>
        )}

        {bookNotFound === undefined ? (
          <div className="result-book-not-found">book not found</div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default ResultSection;
