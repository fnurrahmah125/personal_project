function HeaderDetails({ books }) {
  const totalBooks = books.length;
  const checkedBooks = books.filter((book) => book.checked).length;
  const percentage = Math.round((checkedBooks / totalBooks) * 100);

  if (books.length === 0) {
    return (
      <div className="header-details">
        🌱 Bookshelf is empty. Let&apos;s add some books to it 😁
      </div>
    );
  }
  return (
    <div className="header-details">
      🌱 There are <strong>{totalBooks}</strong> books in the list, you have
      already finished reading <strong>{checkedBooks}</strong> books{" "}
      <strong>({percentage}%)</strong>.{" "}
      {percentage === 0 ? (
        <span>Let&apos;s go and read some books.</span>
      ) : (
        <span>Keep it up!</span>
      )}
    </div>
  );
}

export default HeaderDetails;
