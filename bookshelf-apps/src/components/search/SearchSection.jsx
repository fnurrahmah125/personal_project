// import Button from "../button/Button";
import InputText from "../input/InputText";
import TitleSection from "../title/TitleSection";
import FormSection from "../form/FormSection";

function SearchSection({ searchBook, onSearchBook }) {
  return (
    <div className="search-book">
      <TitleSection text="search a book"></TitleSection>
      <FormSection id="searchBook">
        <InputText>
          <input
            id="searchBookTitle"
            type="text"
            value={searchBook}
            onChange={(e) => onSearchBook(e.target.value)}
            required
          />
          <label htmlFor="searchBookTitle">title</label>
        </InputText>
        {/* <Button id="searchSubmit" type="submit" text="search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="20"
            viewBox="0 0 512 512"
          > */}
        {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--> */}
        {/* <path
              fill="#1f1717"
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6 .1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
            />
          </svg>
        </Button> */}
      </FormSection>
    </div>
  );
}

export default SearchSection;
