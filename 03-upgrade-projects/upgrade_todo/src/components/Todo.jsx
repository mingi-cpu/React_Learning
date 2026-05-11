import { useState } from "react"
import "./Todo.css"
import TodoItem from "./TodoItem"
const Todo = ({editTodos,deleteAllTodos,checkTodos,todos,deleteTodos}) => {
    const [research,setResearch]=useState("");
    function onChangeResearch(e){
        setResearch(e.target.value)
    }
    return (
        <div className="Todo">
            <div className="searchAndDelete">
                <input type="text" onChange={onChangeResearch} value={research} placeholder="검색"/>
                <button onClick={deleteAllTodos}>전체삭제</button>
            </div>
            <p>not checked</p>
            <div className="uncheckedTodo_wrap">
                {todos.filter(todo=>(String(todo.text).includes(research)) && !(todo.check))
                .map((todo, idx) => (
                    <TodoItem editTodos={editTodos} key={idx} id={todo.id} checkTodos={checkTodos} check={todo.check} content={todo.text} date={todo.date} deleteTodos={deleteTodos}/>
                ))}
            </div>
            <p>checked</p>
            <div className="checkedTodo_wrap">
                {todos.filter(todo=>(String(todo.text).includes(research)) && (todo.check))
                .map((todo, idx) => (
                    <TodoItem editTodos={editTodos} key={idx} id={todo.id} checkTodos={checkTodos} check={todo.check} content={todo.text} date={todo.date} deleteTodos={deleteTodos}/>
                ))} 
            </div>
        </div> 
    )
}
export default Todo