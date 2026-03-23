import "./Todoitem.css"
const Todoitem = () => {
    return <div className="Todoitem "> 
        <input type="checkbox"/>
        <div className="content">todo</div>
        <div className="date">date</div>
        <button>삭제</button> 
    </div>
}
export default Todoitem