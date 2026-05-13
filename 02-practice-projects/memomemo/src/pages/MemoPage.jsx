import { useState } from "react";
import Header from "../components/Header"
import "./MemoPage.css"
import { useNavigate, useParams } from "react-router-dom";
export default function MemoPage({memoes,deleteMemos,fixMemoes}){
    const [num]=useState(()=>Math.floor(Math.random()*8));
    const params = useParams();
    const memo = memoes.filter((a)=>{
        return Number(a.id)===Number(params.id);
    })
    const [title,setTitle]=useState(memo[0].title)
    const [text,setText]=useState(memo[0].text)
    const [editState,setEditState]= useState(false);
    const navi = useNavigate();
    function onClickSaveButton(){
        if(title===""||text===""){
            alert("내용을 모두 채워주세요")
            return
        }
        fixMemoes(memo[0].id,title,text);
        setEditState(false);
    }
    function onClickEditButton(){
        setEditState(true);
    }
    function onClickDeleteButton(){
        deleteMemos(memo[0]);
        navi("/");
    }
    function onChangeTitle(e){
        setTitle(e.target.value);
    }
    function onChangeText(e){
        setText(e.target.value);
    }
    return(
        <div className={`MemoPage background_${num}`}>
            <Header/>
            <div className="MemoPage_box">
                {editState?
                <input maxLength={30} type="text" value={title} onChange={onChangeTitle}/>
                :<h5>{memo[0].title}</h5>}
                <p>{memo[0].date}</p>
                {editState?
                <textarea value={text} onChange={onChangeText}></textarea>
                :<p>{memo[0].text}</p>}
            </div>
            {editState?
            <button className="save_button" onClick={onClickSaveButton}>save</button>
            :<button className="edit_button" onClick={onClickEditButton}>edit</button>}
            <button className="del_button" onClick={onClickDeleteButton}>delete</button>
        </div>
    )
}