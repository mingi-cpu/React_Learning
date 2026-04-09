import { useParams,useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import { getStringedDate } from "../util/get-stringed-date";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/uawPageTitle";
const Diary = () => {
    const params= useParams();
    const nav=useNavigate();
    usePageTitle(`${params.id}번 일기`)
    const curDiaryItem=useDiary(params.id);
    if (!curDiaryItem){
        return <div>데이터 로딩중...!</div>
    }
    const {createdDate,emotionid,content}=curDiaryItem;
    const title=getStringedDate(new Date(createdDate))
    return <div>
        <Header title={`${title} 기록 `} 
        leftChild={<Button text={"< 뒤로가기"} onClick={()=>nav(-1)}/>} 
        rightChild={<Button text={"수정하기"} onClick={()=>nav(`/edit/${params.id}`)}/>}/>
        <Viewer emotionid={emotionid} content={content}/>
    </div>;  
}
export default Diary ;