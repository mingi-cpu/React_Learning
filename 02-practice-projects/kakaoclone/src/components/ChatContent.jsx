import { useState } from "react"
import "./ChatContent.css"
import ChatBox from "./ChatBox"
import { useNavigate } from "react-router-dom"
const ChatContent = () =>{
    const [ChatState,setChatState]=useState("all")
    return(
        <div className="ChatContent">
            <div className="ChatContentHead">
                <div onClick={()=>setChatState("all")} className={`ContentSelect ${ChatState=="all"?"SelectBlack":""}`}>전체</div>
                <div onClick={()=>setChatState("noRead")} className={`ContentSelect ${ChatState=="noRead"?"SelectBlack":""}`}>안읽음</div>
            </div>
            <div className="ChatContentMain">
                <ChatBox/>
            </div>
        </div>
    )
}
export default ChatContent