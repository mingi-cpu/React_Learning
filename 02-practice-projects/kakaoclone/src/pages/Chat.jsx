import SideBar from "../components/SideBar"
import "./Chat.css"
import ChatContent from "../components/ChatContent"
const Chat = ()=>{
    return(
        <div className="Chat">
            <SideBar color={2}/>
            <div className="ChatRight">
                <div className="ChatHead">
                    <h1>채팅</h1>
                    <i class="fi fi-rr-search"></i>
                    <i class="fi fi-ts-comment-medical"></i>
                    <i class="fi fi-rr-settings"></i>
                </div>
                <ChatContent/>
            </div>
        </div>
    )
}
export default Chat