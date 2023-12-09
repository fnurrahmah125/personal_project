import ButtonGroup from "../button/ButtonGroup";

function ResultCard({
  id,
  title,
  author,
  year,
  dataType,
  dataDisplay,
  onDeleteBook,
  onToggleBook,
  onEditBook,
}) {
  return (
    <div
      className="result-book-card"
      data-type={dataType === true ? "finished" : "unfinished"}
      data-display={dataDisplay}
    >
      <div className="result-card-info">
        <div className="result-card-title">{title}</div>
        <div className="result-card-author">
          <span>Author:</span> {author}
        </div>
        <div className="result-card-year">
          <span>Year:</span> {year}
        </div>
      </div>
      <ButtonGroup
        id={id}
        type={dataType}
        onDeleteBook={onDeleteBook}
        onToggleBook={onToggleBook}
        onEditBook={onEditBook}
      />
    </div>
  );
}

export default ResultCard;
