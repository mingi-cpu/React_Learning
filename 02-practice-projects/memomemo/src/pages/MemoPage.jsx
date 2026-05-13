import { useState } from "react";
import Header from "../components/Header"
import "./MemoPage.css"
import { useParams } from "react-router-dom";
export default function MemoPage({memoes}){
    const [num]=useState(()=>Math.floor(Math.random()*8));
    const params = useParams();
    const memo = memoes.filter((a)=>{
        return Number(a.id)===Number(params.id);
    })
    console.log(memo)
    function onClickButton(){
    }
    return(
        <div className={`MemoPage background_${num}`}>
            <Header/>
            <div className="MemoPage_box">
                <h5>{memo[0].title}</h5>
                <p>{memo[0].date}</p>
                <p>{memo[0].text}</p>
            </div>
            <button onClick={onClickButton}>수정</button>
        </div>
    )
}