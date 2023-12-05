function Button({ children, text }) {
  return (
    <button className="button" type="submit">
      {children}
      <span>{text}</span>
    </button>
  );
}

export default Button;
