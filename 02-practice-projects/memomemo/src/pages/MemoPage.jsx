import { useState } from "react";
import Header from "../components/Header"
import "./MemoPage.css"
export default function MemoPage(){
    const [num]=useState(()=>Math.floor(Math.random()*8));
    function onClickButton(){
    }
    return(
        <div className={`MemoPage background_${num}`}>
            <Header/>
            <div className="MemoPage_box">
                <h5>메모제목</h5>
                <p>{new Date().toLocaleDateString()}</p>
                <p>메모 내용</p>
            </div>
            <button onClick={onClickButton}>수정</button>
        </div>
    )
}