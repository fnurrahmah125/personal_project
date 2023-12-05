function InputCheckbox({ text }) {
  return (
    <div className="input-check">
      <label htmlFor="inputBookIsComplete">
        {text}
        <input id="inputBookIsComplete" type="checkbox" />
        <span className="input-checkmark"></span>
      </label>
    </div>
  );
}

export default InputCheckbox;
