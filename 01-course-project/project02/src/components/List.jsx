import "./List.css"
import "./Todoitem.jsx"
import Todoitem from "./Todoitem.jsx"
const List = () => {
    return <div className="List">
        <h4>Todo List 🌱</h4>
        <input placeholder="검색어를 입력하세요 " />
        <div className="todos_wrapper ">
        <Todoitem/>
        <Todoitem/>
        <Todoitem/>
        </div>
    </div>
}
export default List 