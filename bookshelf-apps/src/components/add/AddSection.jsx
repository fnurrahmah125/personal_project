import TitleSection from "../title/TitleSection";
import Button from "../button/Button";
import InputText from "../input/InputText";
import InputCheckbox from "../input/InputCheckbox";
import FormSection from "../form/FormSection";

function AddSection() {
  return (
    <div className="add-book">
      <TitleSection text="input a new book" />
      <FormSection id="inputBook">
        <InputText id="inputBookTitle" type="text" text="title" />
        <InputText id="inputBookAuthor" type="text" text="author" />
        <InputText id="inputBookYear" type="number" text="year" />
        <InputCheckbox text="finished reading" />
        <Button id="bookSubmit" text="add book to bookshelf">
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
