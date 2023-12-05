import ButtonGroup from "../button/ButtonGroup";

function ResultCard({ title, author, year, dataType }) {
  return (
    <div className="result-book-card" data-type={dataType}>
      <div className="result-card-info">
        <div className="result-card-title">{title}</div>
        <div className="result-card-author">
          <span>Author:</span> {author}
        </div>
        <div className="result-card-year">
          <span>Year:</span> {year}
        </div>
      </div>
      <ButtonGroup type={dataType} />
    </div>
  );
}

export default ResultCard;
