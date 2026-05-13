import { useState } from "react";
import Header from "../components/Header"
import "./MemoPage.css"
import { useNavigate, useParams } from "react-router-dom";
export default function MemoPage({memoes,deleteMemos}){
    const [num]=useState(()=>Math.floor(Math.random()*8));
    const params = useParams();
    const navi = useNavigate();
    const memo = memoes.filter((a)=>{
        return Number(a.id)===Number(params.id);
    })
    console.log(memo)
    function onClickEditButton(){
        
    }
    function onClickDeleteButton(){
        deleteMemos(memo[0])
        navi("/")
    }
    return(
        <div className={`MemoPage background_${num}`}>
            <Header/>
            <div className="MemoPage_box">
                <h5>{memo[0].title}</h5>
                <p>{memo[0].date}</p>
                <p>{memo[0].text}</p>
            </div>
            <button className="edit_button" onClick={onClickEditButton}>수정</button>
            <button className="del_button" onClick={onClickDeleteButton}>삭제</button>
        </div>
    )
}