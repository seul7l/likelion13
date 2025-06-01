import { useState } from "react";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import Title from "./components/Title";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  function handleInsert(text) {
    const newTodo = {
      id: Date.now(),
      text,
      checked: false,
    };
    setTodos([newTodo, ...todos]);
  }

  function handleToggle(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }

  function handleRemove(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <Title />
      <TodoInsert onAdd={handleInsert} />
      <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
    </div>
  );
}

export default App;
