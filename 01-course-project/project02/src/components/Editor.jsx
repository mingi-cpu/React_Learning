import "./Editor.css"
import { useState,useRef  } from "react"

const Editor = ({onCreate}) => {
    const [content,setContent]=useState("");
    const contentRef = useRef();
    const onChangeContent = (e) => {
      setContent(e.target.value) 
    }
    const onkeydown=(e)=>{
        if (e.nativeEvent.isComposing) return;
        if (e.key==="Enter"){
            onsubmit();}
    }
    const onsubmit = () =>  {
        if (content===""){
            contentRef.current.focus();
            return;
        }
        onCreate(content)
        setContent("")
    }
    return <div className="Editor">
        <input onKeyDown={onkeydown} ref={contentRef} onChange={onChangeContent} value={content} placeholder="새로운 Todo..." />
        <button onClick={onsubmit}>추가</button>
    </div> 
}
export default Editor   