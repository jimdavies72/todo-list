import "./ToDoList.css";
import { useState } from "react";

const ToDoList = () => {
  const [toDoItems, setToDoItems] = useState([]);
  const [toDoText, setToDoText] = useState("");

  const inputTextHandler = (event) => {
    setToDoText(event.target.value);
  };

  const addHandler = () => {
    const newArray = [...toDoItems];
    const itemObject = {
      text: toDoText,
      complete: false,
    };
    newArray.push(itemObject);
    setToDoItems(newArray);
    setToDoText("");
  };

  const removeHandler = (index) => {
    const newArray = [...toDoItems];
    newArray.splice(index, 1);
    setToDoItems(newArray);
  };

  const tickHandler = (index, complete) => {
    const newArray = [...toDoItems];
    newArray[index].complete = !complete;
    setToDoItems(newArray);
  };

  return (
    <div className="container">
      <div className="todo-list">
        <h1>To Do List</h1>
        <div>
          <input type="text" value={toDoText} onChange={inputTextHandler} />
          <i className="fa fa-plus-square" onClick={addHandler}></i>
        </div>
        {toDoItems.map((toDoItem, index) => {
          return (
            <ItemCard
              key={index}
              item={toDoItem.text}
              complete={toDoItem.complete}
              removeMe={() => removeHandler(index)}
              tickMe={() => tickHandler(index, toDoItem.complete)}
            />
          );
        })}
      </div>
    </div>
  );
};

const ItemCard = (props) => {
  return (
    <div className="itemCard">
      <span className={props.complete ? "complete" : ""}>
        <h3>{props.item}</h3>
      </span>
      <>
        {props.complete ? (
          <i className="fa fa-times" onClick={props.tickMe}></i>
        ) : (
          <i className="fa fa-check" onClick={props.tickMe}></i>
        )}
        <i className="fa fa-trash" onClick={props.removeMe}></i>
      </>
    </div>
  );
};

export default ToDoList;
