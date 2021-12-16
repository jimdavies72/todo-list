import "./ToDoList.css";
import { useState } from "react";

const ToDoList = () => {
  const [toDoItems, setToDoItems] = useState([]);
  const [toDoText, setToDoText] = useState("");
  const [toggle, setToggle] = useState(true);

  const inputTextHandler = (event) => {
    setToDoText(event.target.value);
  };

  const KeyDownHandler = (event) => {
    if (event.key === "Enter") {
      addHandler();
    }
  };

  const addHandler = () => {
    if (toDoText !== "") {
      const newArray = [...toDoItems];
      const itemObject = {
        text: toDoText,
        complete: false,
      };
      newArray.push(itemObject);
      setToDoItems(newArray);
      setToDoText("");
    }
  };

  const removeHandler = (index) => {
    const newArray = [...toDoItems];
    newArray.splice(index, 1);
    setToDoItems(newArray);
  };

  const editHandler = (index) => {
    //window.alert("hello");
    {
      toggle ? setToggle(false) : <input type="text" value="" />;
    }
  };

  const tickHandler = (index, complete) => {
    const newArray = [...toDoItems];
    newArray[index].complete = !complete;
    setToDoItems(newArray);
  };

  return (
    <div className="container">
      <div className="todo-list">
        <span className="heading">
          <h1>To Do List</h1>
        </span>
        <div className="input-fields">
          <input
            type="text"
            className="text-input"
            placeholder="Item"
            value={toDoText}
            onChange={inputTextHandler}
            onKeyDown={KeyDownHandler}
          />
          <p className="add-item">
            <i className="fa fa-plus-square" onClick={addHandler}></i>
          </p>
        </div>
        {toDoItems.map((toDoItem, index) => {
          return (
            <ItemCard
              key={index}
              item={toDoItem.text}
              complete={toDoItem.complete}
              removeMe={() => removeHandler(index)}
              tickMe={() => tickHandler(index, toDoItem.complete)}
              editMe={() => editHandler(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

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

export default ToDoList;
