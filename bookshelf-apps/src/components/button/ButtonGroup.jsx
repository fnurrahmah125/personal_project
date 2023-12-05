function ButtonGroup({ type }) {
  return (
    <div className="button-group">
      {type === "finished" ? (
        <button className="button-finished">
          <span>finished</span>
        </button>
      ) : (
        <button className="button-unfinished">
          <span>unfinished</span>
        </button>
      )}
      <button className="button-edit">
        <span>edit</span>
      </button>
      <button className="button-delete">
        <span>delete</span>
      </button>
    </div>
  );
}

export default ButtonGroup;
