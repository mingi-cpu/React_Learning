import Memo from "../components/Memo"
import "./Home.css"
import EditorButton from "../components/EditorButton"
import Header from "../components/Header";
import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function Home(){
    const navi = useNavigate();
    const [num]=useState(()=>Math.floor(Math.random()*8));
    return(
        <div className={`Home background_${num}`}>
            <Header/>
            <EditorButton/>
            <Memo/>
        </div>
    )
}