import { useState } from "react";
import HeaderDetails from "./HeaderDetails";

function HeaderSection({ books, onAddDummy }) {
  const [isShown, setIsShown] = useState(true);

  return (
    <header className="header">
      {isShown ? (
        <div className="header-question">
          <span>Do you want to use a dummy data set for the starter?</span>
          <button
            className="btn-yes"
            onClick={() => {
              onAddDummy(true);
              setIsShown(false);
            }}
          >
            Yes
          </button>
          <button
            className="btn-no"
            onClick={() => {
              setIsShown(false);
            }}
          >
            No
          </button>
        </div>
      ) : (
        <div></div>
      )}
      <div className="header-banner"></div>

      <div className="header-info">
        <h1 className="header-text">bookshelf app</h1>
        <div className="header-line"></div>
        <HeaderDetails books={books} />
      </div>
    </header>
  );
}

export default HeaderSection;
