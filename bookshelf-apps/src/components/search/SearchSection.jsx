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
      </FormSection>
    </div>
  );
}

export default SearchSection;
