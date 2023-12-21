function FormOverlay({ onHandleOverlay }) {
  return (
    <div
      id="form-overlay"
      className="absolute top-0 bottom-0 right-0 left-0 bg-slate-600/70 backdrop-blur-sm z-20"
      onClick={() => onHandleOverlay()}
    ></div>
  );
}

export default FormOverlay;
