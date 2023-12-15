import TitleSection from "../title/TitleSection";
import Button from "../button/Button";
import InputText from "../input/InputText";
import InputCheckbox from "../input/InputCheckbox";
import FormSection from "../form/FormSection";

import { useState } from "react";
import { generateId } from "../../utils/helpers";

function AddSection({ onAddBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [checked, setChecked] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const newBook = {
      title,
      author,
      year,
      checked,
      display: "visible",
      id: generateId(),
    };
    onAddBook(newBook);

    setTitle("");
    setAuthor("");
    setYear("");
    setChecked(false);
  }

  return (
    <div className="add-book">
      <TitleSection text="input a new book" />
      <FormSection id="inputBook" onSubmit={handleSubmit}>
        <InputText>
          <input
            id="inputBookTitle"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label htmlFor="inputBookTitle">title</label>
        </InputText>
        <InputText>
          <input
            id="inputBookAuthor"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <label htmlFor="inputBookAuthor">author</label>
        </InputText>
        <InputText>
          <input
            id="inputBookYear"
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
          <label htmlFor="inputBookYear">year</label>
        </InputText>
        <InputCheckbox>
          <label htmlFor="inputBookIsComplete">
            finished reading
            <input
              id="inputBookIsComplete"
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <span className="input-checkmark"></span>
          </label>
        </InputCheckbox>
        <Button id="bookSubmit" text="add book to bookshelf" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18"
            width="20"
            viewBox="0 0 448 512"
          >
            {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--> */}
            <path
              fill="#1f1717"
              d="M416 208H272V64c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32v144H32c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h144v144c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V304h144c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32z"
            />
          </svg>
        </Button>
      </FormSection>
    </div>
  );
}

export default AddSection;
