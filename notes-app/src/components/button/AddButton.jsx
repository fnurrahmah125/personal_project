function AddButton({ onHandleForm }) {
  return (
    <button
      id="add-btn"
      className="add-btn fixed right-4 bottom-4 md:right-6 md:bottom-6 cursor-pointer z-10"
      onClick={() => onHandleForm()}
    ></button>
  );
}

export default AddButton;
