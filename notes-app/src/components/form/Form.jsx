import { useState } from "react";
import FormOverlay from "./FormOverlay";

function Form({ formOpen, onHandleOverlay, onAddNote }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [maxChar, setMaxChar] = useState(50);

  function generateId() {
    return +new Date();
  }

  function generateDate() {
    const date = +new Date();
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    return new Date(date).toLocaleDateString("en-GB", options);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newNote = {
      title,
      text,
      favorite: false,
      id: generateId(),
      createdAt: generateDate(),
      display: "visible",
    };
    onAddNote(newNote);

    setTitle("");
    setText("");
    setMaxChar(50);
  }

  function handleTitle(e) {
    setTitle(e.target.value);

    const value = e.target.value;
    const countLimit = 50;

    if (value.length <= countLimit) {
      setMaxChar(countLimit - value.length);
    }
  }

  if (formOpen) {
    return (
      <>
        <FormOverlay onHandleOverlay={onHandleOverlay} />
        <div className="fixed top-1/2 left-1/2 z-30 -translate-x-2/4 -translate-y-2/4 bg-white text-slate-700 rounded-md p-4 w-11/12 md:w-9/12 lg:w-6/12 xl:w-5/12 lg:p-6 dark:bg-slate-900">
          <h2 className="text-2xl font-medium pb-2 border-b border-slate-200 dark:text-white dark:border-slate-700/70">
            Create a note
          </h2>
          <form onSubmit={handleSubmit}>
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
              onChange={(e) => setText(e.target.value)}
              required
              className="block bg-slate-50 w-full px-4 py-3 mb-6 rounded-md placeholder:font-light placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-500 dark:bg-slate-800/90 dark:text-slate-200 dark:placeholder:text-slate-500"
            ></textarea>
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
        </div>
      </>
    );
  }
}

export default Form;
