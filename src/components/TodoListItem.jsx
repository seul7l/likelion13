function TodoListItem({ todo, onToggle, onRemove }) {
  return (
    <div className="todoBox">
      <input
        className="checkBox"
        type="checkbox"
        checked={todo.checked}
        onChange={() => onToggle(todo.id)}
      />
      <div className="todoText">{todo.text}</div>

      <button className="remove" onClick={() => onRemove(todo.id)}>
        삭제
      </button>
    </div>
  );
}

export default TodoListItem;
