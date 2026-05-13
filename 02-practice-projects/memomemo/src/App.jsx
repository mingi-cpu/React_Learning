import './App.css'
import { Routes, Route } from "react-router-dom";
import EditorPage from "./pages/EditorPage"
import Home from './pages/Home'
import MemoPage from './pages/MemoPage'
import { useEffect, useState } from 'react';
function App() {
  const memoKey = "Memo"
  const savedmemoes=localStorage.getItem(memoKey)
  const parsedmemoes=savedmemoes? JSON.parse(savedmemoes):[{
    title:'오늘',
    date:new Date().toLocaleDateString(),
    id:new Date().getTime(),
    text:'슬프다.'
  }];
  const [memoes,setMemoes]=useState(parsedmemoes)
  useEffect(saveMemoes,[memoes])
  function saveMemoes(){
    localStorage.setItem(memoKey,JSON.stringify(memoes))
  }
  function createMemos(newmemo){
      setMemoes([...memoes,newmemo]);
  }
  function deleteMemos(delmemo){
      setMemoes([...memoes].filter((a)=>a.id!==delmemo.id));
  }
  function fixMemoes(fixid,fixTitle,fixText){
    setMemoes([...memoes].map((a)=>
      a.id===fixid?{...a,text:fixText,title:fixTitle}:{...a}
    ))
  }
  return (
    <Routes>
      <Route path="/" element={<Home memoes={memoes}/>}/>
      <Route path="/Editor" element={<EditorPage createMemos={createMemos}/>} />
      <Route path="/Memo/:id" element={<MemoPage memoes={memoes} fixMemoes={fixMemoes} deleteMemos={deleteMemos}/>} />
    </Routes>
  )
}

export default App
