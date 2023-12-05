import HeaderDetails from "./HeaderDetails";

function HeaderSection() {
  return (
    <header className="header">
      <div className="header-banner"></div>

      <div className="header-info">
        <h1 className="header-text">bookshelf app</h1>
        <div className="header-line"></div>
        <HeaderDetails />
      </div>
    </header>
  );
}

export default HeaderSection;
