const ItemCard = (props) => {
  return (
    <div className="item-card">
      <span className={props.complete ? "complete" : ""}>
        <h3 className="item" onDoubleClick={props.editMe}>
          {props.item}
        </h3>
      </span>
      <div className="item-icons">
        {props.complete ? (
          <p>
            <i className="fa fa-times" onClick={props.tickMe}></i>
          </p>
        ) : (
          <p>
            <i className="fa fa-check" onClick={props.tickMe}></i>
          </p>
        )}
        <p>
          <i className="fa fa-trash" onClick={props.removeMe}></i>
        </p>
      </div>
    </div>
  );
};

export default ItemCard;
