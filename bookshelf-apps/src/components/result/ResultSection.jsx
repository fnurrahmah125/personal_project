import TitleSection from "../title/TitleSection";
import ResultDropdown from "./ResultDropdown";
import ResultCard from "./ResultCard";

function ResultSection({ books, onDeleteBook, onToggleBook }) {
  return (
    <div className="result-container">
      <div className="result-book">
        <div className="result-book-title">
          <TitleSection text="list of books" />
          <ResultDropdown />
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResultSection;
