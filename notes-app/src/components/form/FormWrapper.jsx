function FormWrapper({ children }) {
  return (
    <div
      id="form-wrapper"
      className="fixed top-1/2 left-1/2 z-30 -translate-x-2/4 -translate-y-2/4 bg-white text-slate-700 rounded-md p-4 w-11/12 md:w-9/12 lg:w-6/12 xl:w-5/12 lg:p-6 dark:bg-slate-900"
    >
      {children}
    </div>
  );
}

export default FormWrapper;
