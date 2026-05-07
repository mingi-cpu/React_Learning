import { useState } from "react"
import "./TodoItem.css"

const TodoItem = ({ editTodos, checkTodos, check, id, content, date, deleteTodos }) => {
  const [isEdit, setIsEdit] = useState(false)
  const [editText, setEditText] = useState(content)
  function onClickDelete() {
    deleteTodos(id)
  }
  function onClickEdit() {
    if (isEdit) {
      editTodos(id, editText) // 저장
      setIsEdit(false)
    } else {
      setIsEdit(true)
    }
  }

  return (
    <div className="TodoItem">
      <input type="checkbox" checked={check} onChange={() => checkTodos(id)} />

      {isEdit ? (
        <input
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <p>{content}</p>
      )}

      <p>{date}</p>

      <button onClick={onClickDelete}>삭제</button>
      <button onClick={onClickEdit}>
        {isEdit ? "저장" : "수정"}
      </button>
    </div>
  )
}

export default TodoItem