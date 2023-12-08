function ButtonGroup({ id, type, onDeleteBook, onToggleBook, onEditBook }) {
  return (
    <div className="button-group">
      {type === true ? (
        <button className="button-finished" onClick={() => onToggleBook(id)}>
          <span>finished</span>
        </button>
      ) : (
        <button className="button-unfinished" onClick={() => onToggleBook(id)}>
          <span>unfinished</span>
        </button>
      )}
      <button className="button-edit" onClick={() => onEditBook(id)}>
        <span>edit</span>
      </button>
      <button className="button-delete" onClick={() => onDeleteBook(id)}>
        <span>delete</span>
      </button>
    </div>
  );
}

export default ButtonGroup;
