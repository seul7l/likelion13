import TodoListItem from "./TodoListItem";

function TodoList({ todos, onToggle, onRemove }) {
  return (
    <div className="allList">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default TodoList;
