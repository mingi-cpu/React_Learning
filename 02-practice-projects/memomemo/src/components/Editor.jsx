import { useState } from "react"
import "./Editor.css"
import { useNavigate } from "react-router-dom";
const Editor = ({createMemos}) =>{
    const [title,setTitle] = useState("");
    const [text,setText] = useState("");
    const navi = useNavigate()
    function onClickButton(){
        if(title===""||text===""){
            alert("내용을 모두 채워주세요")
            return
        }
        createMemos(
            {
                title:title,
                date:new Date().toLocaleDateString(),
                id:new Date().getTime(),
                text:text
            }
        )
        navi("/")
    }
    function onChangeTitle(e){
        setTitle(e.target.value);
    }
    function onChangeText(e){
        setText(e.target.value);
    }
    return(
        <div className="Editor">
                <input value={title} maxLength={32} onChange={onChangeTitle} type="text" placeholder="title"/>
                <p>{new Date().toLocaleDateString()}</p>
                <textarea value={text} onChange={onChangeText} placeholder="오늘은 어떤일이 있었나요?"></textarea>
                <button onClick={onClickButton}>load</button>
        </div>
    )
}
export default Editor