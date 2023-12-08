function FormSection({ children, id, onSubmit }) {
  return (
    <form id={id} className="form-input" onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default FormSection;
