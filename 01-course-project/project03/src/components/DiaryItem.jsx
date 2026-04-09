import {getEmotionImage} from "../util/get-emotion-images"
import Button from "./Button"
import "./DiaryItem.css"
import { useNavigate } from "react-router-dom"
const DiaryItem =({id, emotionid, createdDate, content}) =>{ 
    const nav = useNavigate();
    return <div className="DiaryItem">
        <div
        onClick={()=>nav(`/diary/${id}`)}
        className={`img_section img_section_${emotionid}`}>
            <img src={getEmotionImage(emotionid)}/>
        </div>
        <div 
        onClick={()=>nav(`/diary/${id}`)}
        
        className="info_section">
            <div className="created_date">{new Date(createdDate).toLocaleDateString()}</div>
            <div className="content">{content}</div> 
        </div>
        <div className="button_section">
            <Button onClick={()=>nav(`/edit/${id}`)} text={"수정하기"}/>
        </div>
    </div>
}
export default DiaryItem