import React, { useEffect, useRef, useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [todoLists, setTodoLists] = useState([]);
  const [inputText, setInputText] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function addItem() {
    setTodoLists((prevList) => {
      return [inputText, ...prevList];
    });
    setInputText("");
  }
  function deleteItem(id) {
    setTodoLists((prevList) => {
      return prevList.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          ref={inputRef}
          onChange={handleChange}
          value={inputText}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todoLists.map((list, index) => {
            return (
              <ToDoItem
                key={index}
                id={index}
                item={list}
                onChecked={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
