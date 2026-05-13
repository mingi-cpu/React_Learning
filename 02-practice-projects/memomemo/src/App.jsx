import {useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import EditorPage from "./pages/EditorPage"
import Home from './pages/Home'
import MemoPage from './pages/MemoPage'
function App() {
  const [memoes,setMemoes]=useState([{
    title:'오늘',
    date:new Date().toLocaleDateString(),
    id:new Date().getTime(),
    text:'슬프다.'
  }])
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Editor" element={<EditorPage/>} />
      <Route path="/Memo" element={<MemoPage/>} />
    </Routes>
  )
}

export default App
