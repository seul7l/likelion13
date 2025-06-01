import { useState } from "react";

function TodoInsert({ onAdd }) {
  const [insert, setInsert] = useState("");

  function handleSubmit() {
    if (insert) {
      onAdd(insert);
      setInsert("");
    }
  }

  function handleChange(e) {
    setInsert(e.target.value);
  }

  return (
    <div className="insertBox">
      <input
        className="insert"
        type="text"
        value={insert}
        onChange={handleChange}
        placeholder="할 일을 입력하세요."
      />

      <button className="add" onClick={handleSubmit}>
        추가
      </button>
    </div>
  );
}

export default TodoInsert;
