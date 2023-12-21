import { useEffect, useState } from "react";
import { generateDate } from "../../utils/helper";

import FormOverlay from "./FormOverlay";
import FormWrapper from "./FormWrapper";
import FormTitle from "./FormTitle";

function FormEdit({ onHandleOverlay, isEditing, selectedNote, onUpdateNote }) {
  function countLength(text) {
    if (text !== undefined) {
      return 50 - text.length;
    }
  }

  const [values, setValues] = useState({
    id: 0,
    title: "",
    text: "",
    maxChar: 0,
  });

  const selectedData = (selectedNote) => {
    return selectedNote.length !== 0
      ? {
          ...values,
          id: selectedNote.id,
          title: selectedNote.title,
          text: selectedNote.text,
          maxChar: countLength(selectedNote.title),
        }
      : [];
  };

  useEffect(() => {
    setValues(selectedData(selectedNote));
  }, [selectedNote]);

  function handleTitle(e) {
    const inputValue = e.target.value;
    const countLimit = 50;

    if (inputValue.length <= countLimit) {
      setValues({
        ...values,
        title: inputValue,
        maxChar: countLimit - inputValue.length,
      });
    }
  }

  function handleText(e) {
    setValues({ ...values, text: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const isUpdate =
      values.title !== selectedNote.title || values.text !== selectedNote.text;

    const newNote = {
      id: selectedNote.id,
      title: values.title,
      text: values.text,
      createdAt: isUpdate ? generateDate() : selectedNote.createdAt,
    };

    onUpdateNote(newNote);
    onHandleOverlay();
  }

  if (isEditing) {
    return (
      <>
        <FormOverlay onHandleOverlay={onHandleOverlay} />
        <FormWrapper>
          <FormTitle title="Update note" />
          <form id="form-edit" onSubmit={handleSubmit}>
            <p className="text-end">
              <span className="text-sm text-left inline-block px-4 py-2 my-4 font-medium bg-sky-100 text-blue-600 rounded-md">
                Characters left: {values.maxChar}
              </span>
            </p>
            <input
              type="text"
              placeholder="Enter title..."
              maxLength={50}
              value={values.title}
              onChange={(e) => handleTitle(e)}
              className="block bg-slate-50 w-full px-4 py-2 rounded-md mb-4 placeholder:font-light placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-500 dark:bg-slate-800/90 dark:text-slate-200 dark:placeholder:text-slate-500"
            />
            <textarea
              cols="30"
              rows="10"
              placeholder="Enter your text here..."
              value={values.text}
              onChange={(e) => handleText(e)}
              className="block bg-slate-50 w-full px-4 py-3 mb-6 rounded-md placeholder:font-light placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-500 dark:bg-slate-800/90 dark:text-slate-200 dark:placeholder:text-slate-500"
            ></textarea>
            <div className="pt-4 lg:pt-6 border-t border-slate-200 flex justify-end gap-2.5 dark:border-slate-700/70">
              <button
                type="submit"
                className="bg-rose-600 text-white text-sm py-2 px-4 rounded-md hover:bg-rose-700 "
              >
                Close
              </button>
            </div>
          </form>
        </FormWrapper>
      </>
    );
  }
}

export default FormEdit;
