import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect} from "react";
import { DiaryDispatchContext } from "../App";
import usePageTitle from "../hooks/uawPageTitle";
const New = () => {
    const {onCreate} = useContext(DiaryDispatchContext)
    const nav=useNavigate();
    const onSubmit = (input) => {
        onCreate(input.createdDate.getTime(),
            input.emotionid,
            input.content
        )
        nav("/",{replace:true})
    }
    usePageTitle("새일기 쓰기")
    return <div>
        <Header title={"새일기 쓰기"} leftChild={<Button text={"< 뒤로가기"} onClick={()=>nav(-1)}/>}/>
        <Editor onSubmit={onSubmit}/>   
    </div>;
}
export default New  ;