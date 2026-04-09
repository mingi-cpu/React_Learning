import "./Viewer.css"
import { getEmotionImage } from "../util/get-emotion-images"
import { emotionList } from "../util/constants";
const Viewer=({emotionid,content})=>{
    const emotionItem=emotionList.find((item)=>String(item.emotionid)===String(emotionid))
    return <div className="Viewer">
        <section className="img_section">
            <h4>오늘의 감정</h4>
            <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionid}`}>
                <img src={getEmotionImage(emotionid)}/>
            <div>{emotionItem.emotionname}</div>
            </div>
        </section>
        <section className="content_section">
            <h4>오늘의 일기</h4>
            <div className="content_wrapper">
                <p>{content}</p>
            </div>
        </section>
    </div>
}
export default Viewer