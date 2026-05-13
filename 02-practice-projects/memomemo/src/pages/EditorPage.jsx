import Header from "../components/Header"
import { useState } from "react";
import Editor from "../components/Editor";
export default function EditorPage(){
    const [num]=useState(()=>Math.floor(Math.random()*8));
    return(
        <div className={`Editor background_${num}`}>
            <Header/>
            <Editor/>
        </div>
    )
}