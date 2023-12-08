function ResultDropdown({ onFilterBook }) {
  const categories = ["all", "finished", "unfinished"];

  return (
    <select onChange={(e) => onFilterBook(e.target.value)}>
      {categories.map((item, index) => {
        return (
          <option value={item} key={index}>
            {item}
          </option>
        );
      })}
    </select>
  );
}

export default ResultDropdown;
