import { useState } from "react";
import { generateId, generateDate } from "../../utils/helper";

import FormOverlay from "./FormOverlay";
import FormWrapper from "./FormWrapper";
import FormTitle from "./FormTitle";
import FormRadioBtn from "./FormRadioBtn";

function FormAdd({ isOpen, onHandleOverlay, onAddNote }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [maxChar, setMaxChar] = useState(50);
  const [color, setColor] = useState("yellow");

  const colors = ["yellow", "orange", "purple", "blue", "green"];

  function handleSubmit(e) {
    e.preventDefault();

    const newNote = {
      title,
      text,
      color,
      favorite: false,
      id: generateId(),
      createdAt: generateDate(),
      display: "visible",
    };

    onAddNote(newNote);

    setTitle("");
    setText("");
    setMaxChar(50);

    onHandleOverlay();
  }

  function handleTitle(e) {
    const inputValue = e.target.value;
    const countLimit = 50;

    setTitle(inputValue);

    if (inputValue.length <= countLimit) {
      setMaxChar(countLimit - inputValue.length);
    }
  }

  function handleText(e) {
    setText(e.target.value);
  }

  function handleColor(e) {
    setColor(e.target.value);
  }

  if (isOpen) {
    return (
      <>
        <FormOverlay onHandleOverlay={onHandleOverlay} />
        <FormWrapper>
          <FormTitle title="Create a note" />
          <form id="form-add" onSubmit={handleSubmit}>
            <p className="text-end">
              <span className="text-sm text-left inline-block px-4 py-2 my-4 font-medium bg-sky-100 text-blue-600 rounded-md">
                Characters left: {maxChar}
              </span>
            </p>
            <input
              type="text"
              placeholder="Enter title..."
              value={title}
              maxLength={50}
              onChange={(e) => handleTitle(e)}
              required
              className="block bg-slate-50 w-full px-4 py-2 rounded-md mb-4 placeholder:font-light placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-500 dark:bg-slate-800/90 dark:text-slate-200 dark:placeholder:text-slate-500"
            />
            <textarea
              cols="30"
              rows="10"
              placeholder="Enter your text here..."
              value={text}
              onChange={(e) => handleText(e)}
              required
              className="block bg-slate-50 w-full px-4 py-3 mb-4 rounded-md placeholder:font-light placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-500 dark:bg-slate-800/90 dark:text-slate-200 dark:placeholder:text-slate-500"
            ></textarea>
            <div className="mb-4 py-2 font-regular text-slate-700 dark:text-white">
              <span>Background options:</span>
              {colors.map((color, index) => (
                <FormRadioBtn
                  key={index}
                  color={color}
                  onHandleColor={handleColor}
                />
              ))}
            </div>
            <div className="pt-4 lg:pt-6 border-t border-slate-200 flex justify-end gap-2.5 dark:border-slate-700/70">
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 text-sm rounded-md hover:bg-blue-700"
              >
                Create
              </button>
              <button
                type="button"
                className="bg-rose-600 text-white text-sm py-2 px-4 rounded-md hover:bg-rose-700"
                onClick={onHandleOverlay}
              >
                Cancel
              </button>
            </div>
          </form>
        </FormWrapper>
      </>
    );
  }
}

export default FormAdd;
