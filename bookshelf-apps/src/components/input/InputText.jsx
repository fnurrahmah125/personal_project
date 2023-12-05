function InputText({ id, type, text }) {
  return (
    <div className="input-text">
      <input id={id} type={type} required />
      <label htmlFor={id}>{text}</label>
    </div>
  );
}

export default InputText;
