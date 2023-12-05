function ResultDropdown() {
  const categories = ["all", "finished", "unfinished"];

  return (
    <select>
      {categories.map((item, index) => {
        return (
          <option value={index} key={index}>
            {item}
          </option>
        );
      })}
    </select>
  );
}

export default ResultDropdown;
