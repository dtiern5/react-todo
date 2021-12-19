import React from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {

  const [items, setItems] = React.useState([]);

  function addItem(inputText) {
    setItems((prev) => {
      return [...prev, inputText]
    });
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
        <InputArea onAdd={addItem}/>
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
