import "./ToDoList.css";
import ItemCard from "./components/ItemCard";
import { useEffect, useState } from "react";

const ToDoList = () => {
  const [toDoItems, setToDoItems] = useState([]);
  const [toDoText, setToDoText] = useState("");

  useEffect(() => {
    document.title = "To-do List App";
  }, []);

  const inputTextHandler = (event) => {
    setToDoText(event.target.value);
  };

  const keyDownHandler = (event) => {
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
    //TODO: add the ability to edit saved items
    window.alert("So this would be an edit/update!");
    //const newArray = [...toDoItems];
    //newArray.splice(index, 1);
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
            onKeyDown={keyDownHandler}
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

export default ToDoList;
