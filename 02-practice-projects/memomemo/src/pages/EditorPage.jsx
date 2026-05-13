import Header from "../components/Header"
import { useState } from "react";
import "./EditorPage.css"
import Editor from "../components/Editor";
export default function EditorPage({createMemos}){
    const [num]=useState(()=>Math.floor(Math.random()*8));
    return(
        <div className={`EditorPage background_${num}`}>
            <Header/>
            <Editor createMemos={createMemos}/>
        </div>
    )
}