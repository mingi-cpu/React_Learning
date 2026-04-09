import { useParams,useNavigate, replace } from "react-router-dom"
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext,useEffect,useState } from "react";
import { DiaryDispatchContext } from "../App";
import { DiaryStateContext } from "../App";
import useDiary from "../hooks/useDiary";
const Edit = () => {
    const nav=useNavigate()
    const  params=useParams();
    const {onDelete,onUpdate}=useContext(DiaryDispatchContext)
    const curDiaryItem = useDiary(params.id)
    const onClickDelete =()=>{
        if(
        window.confirm("일기를 정말 삭제하시겠습니까?")
    ){ 
        onDelete(params.id)
        nav("/",{replace:true})
    }}
    const onSubmit=(input)=>{
        if(
            window.confirm("일기를 정말 수정할까요?")
        )
        onUpdate(params.id,
            input.createdDate.getTime(),
            input.emotionid,
            input.content)
        nav("/", {replace:true})
    }
    return <div>
        <Header title={"수정하기"}
         leftChild={<Button text={"< 뒤로가기"}
          onClick={()=>nav(-1)}/>}
          rightChild={<Button text={"삭제하기"} type={"NEGATIVE"} onClick={onClickDelete}/>}/>
        <Editor initdata={curDiaryItem} onSubmit={onSubmit}/>
    </div>
}
export default Edit 