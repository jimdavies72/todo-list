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
  };

  const removeHandler = (index) => {
    const newArray = [...toDoItems];
    newArray.splice(index, 1);
    setToDoItems(newArray);
  };

  const tickHandler = (index) => {
    const newArray = [...toDoItems];
    newArray[index].complete = true;
    setToDoItems(newArray);
  };

  return (
    <div>
      <h1>To Do List</h1>
      <input type="text" onChange={inputTextHandler} />
      <button onClick={addHandler}>ADD</button>
      {toDoItems.map((toDoItem, index) => {
        return (
          <ItemCard
            key={index}
            item={toDoItem.text}
            complete={toDoItem.complete}
            removeMe={() => removeHandler(index)}
            tickMe={() => tickHandler(index)}
          />
        );
      })}
    </div>
  );
};

const ItemCard = (props) => {
  return (
    <div className="itemCard">
      <span className={props.complete ? "complete" : ""}>
        <h3>{props.item}</h3>
      </span>

      <button onClick={props.tickMe}>Done</button>
      <button onClick={props.removeMe}>Delete</button>
    </div>
  );
};

export default ToDoList;
