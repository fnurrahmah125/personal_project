function FormSection({ children, id }) {
  return (
    <form id={id} className="form-input">
      {children}
    </form>
  );
}

export default FormSection;
