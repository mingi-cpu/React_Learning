import { useState } from "react"
import "./Editor.css"
const Editor = ({createTodos}) => {
    const [content,setContent]=useState("");
    function onChangeContent(e){
        setContent(e.target.value)
    }
    function onClickButton(){
        createTodos({
            id: new Date().getTime(),
            text:content,
            date:new Date().toLocaleDateString(),
            check:false
        })
        setContent("")
    }
    return <div className="Editor">
        <input type="text" onChange={onChangeContent} value={content} placeholder="todo..."/>
        <button onClick={onClickButton}>create</button>
    </div>
}
export default Editor