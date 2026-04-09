import './Emotion.css'
import { getEmotionImage } from '../util/get-emotion-images'
const Emotion = ({emotionid,emotionname,isSelected,onClick}) => {
    return <div onClick={onClick} className={`EmotionItem ${isSelected?`EmotionItem_${emotionid}`:""}`}>
        <img className='emotion_img' src={getEmotionImage(emotionid)}/>
        <div className='emotion_name'>{emotionname}</div>
    </div>
}
export default Emotion