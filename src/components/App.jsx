import React from "react";
import ToDoItem from "./ToDoItem";

function App() {

  const [inputText, setInputText] = React.useState("");
  const [items, setItems] = React.useState([]);

  function handleChange(event) {
    const newItem = event.target.value;
    setInputText(newItem);
  }

  function addItem(event) {
    setItems((prev) => {
      return [...prev, inputText]
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
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
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => <ToDoItem
            key={index}
            id={index}
            text={item}
            onChecked={deleteItem}
          />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
