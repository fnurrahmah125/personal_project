function Button({ children, text, type, onClearBooks }) {
  if (type === "submit") {
    return (
      <button className="button" type={type}>
        {children}
        <span>{text}</span>
      </button>
    );
  }

  return (
    <button className="button" onClick={onClearBooks}>
      {children}
      <span>{text}</span>
    </button>
  );
}

export default Button;
