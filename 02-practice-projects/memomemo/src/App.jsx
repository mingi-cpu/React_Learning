import {useState } from 'react'
import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import Memo from './components/Memo'
function App() {
  const [num]=useState(()=>Math.floor(Math.random()*8))
  const [memoes,setMemoes]=useState([{
    title:'오늘',
    date:new Date().toLocaleDateString(),
    id:new Date().getTime(),
    text:'슬프다.'
  }])
  function createMemo(){
    
  }
  function deleteMemo(){

  }
  function updateMemo(){

  }
  return (
    <div className={`App background_${num}`}>
      <Header/>
      <Editor/>
      <Memo/>
    </div>
  )
}

export default App
