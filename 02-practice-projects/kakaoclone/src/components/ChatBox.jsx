import { useNavigate } from "react-router-dom"
import "./ChatBox.css"
const ChatBox = () => {
    const nav=useNavigate()
    return(
        <div className="ChatBox" onClick={()=>nav("/chat/1")}>
            <img src="/PFP.jpg" alt="" />
            <div className="ChatBoxText">
                <h5>나와의 채팅</h5>
                <p>최근채팅</p>
            </div>
            <div className="ChatBoxInfo">
                <p className="ChatBoxInfoDate">{new Date().toLocaleDateString()}</p>
                <span className="ChatBoxInfoNum">4</span>
            </div>
        </div>
    )
}
export default ChatBox