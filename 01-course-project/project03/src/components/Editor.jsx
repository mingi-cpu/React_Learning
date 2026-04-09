import Button from "./Button";
import "./Editor.css"
import Emotion from "./Emotion"
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { emotionList } from "../util/constants";
const getStringedDate=(targetDate)=>{
    let year=targetDate.getFullYear();
    let month=targetDate.getMonth()+1;
    let date=targetDate.getDate();
    if (month<10){
        month=`0${month}`
    } 
    if (date<10){
        date=`0${date}`
    }
    return `${year}-${month}-${date}`
};
const Editor = ({onSubmit,initdata}) => {
    const  [input,setInput]=useState({
        createdDate:new Date() ,
        emotionid:3,
        content:[]
    })
    const nav=useNavigate()
    useEffect(()=>{
        if (initdata){
            setInput({
                ...initdata,
                createdDate:new Date(Number(initdata.createdDate))
            })
        }
    },[initdata])
    const onChangeInput=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        if (name==="createdDate"){
            value=new Date(value)
        }
        setInput ({
            ...input,
            [name]:value
        })
    }
    const onClickSubmitButton = () => {
        onSubmit(input)
    }
    console.log(typeof input.emotionId, input.emotionId)
    return <div className="Editor">
        <section className="date_section">
            <h4>오늘의 날짜</h4>
            <input name="createdDate" onChange={onChangeInput} type="date" value={getStringedDate(input.createdDate)}/>
        </section>
        <section className="emotion_section">
            <h4>오늘의 감정</h4>
            <div className="emotion_list_wrapper">
                {emotionList.map((item)=><Emotion onClick={()=>{onChangeInput({
                    target:{
                        name:"emotionid",
                        value:item.emotionid
                    }
                })}} key={item.emotionid} {...item} isSelected={item.emotionid==input.emotionid}/>)}
            </div> 
        </section>
        <section className="content_section">
            <h4>오늘의 일기</h4>
            <textarea name="content" value={input.content} onChange={onChangeInput} placeholder="오늘은 어땠나요?">
            </textarea>
        </section>
        <section className="button_section">
            <Button text={"취소하기"} onClick={()=>nav(-1)}/>
            <Button onClick={onClickSubmitButton} text={"작성완료"} type={"POSITIVE"} />
        </section>
    </div>
}
export default Editor