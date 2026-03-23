import './App.css'
import { useState,useRef } from 'react'
import Editor from './components/Editor'
import Header from './components/Header'
import List from './components/List'
 const mockData = [
    {
      isDone:false,
      content: "청소",
      date:new Date().getTime(),
      id:0
    },{
      isDone:false,
      content: "세탁",
      date:new Date().getTime(),
      id:1
    },{
      isDone:false,
      content: "빨래",
      date:new Date().getTime(),
      id:2
    }
  ]
function App() {
  const[todos,setTodos]=useState(mockData)
  const idref=useRef(3)
  const onCreate= (content) => {
    const newTodo={
      id:idref.current++,
      isDone: false,
      content,
      date:new Date().getTime()
    }

    setTodos([newTodo,...todos])
  } ;

  const onUpdate = (targetId) => {
    setTodos(todos.map((todo)=>
      todo.id===targetId
    ?{...todo,isDone:!todo.isDone}
    :todo
  ))}
  const onDelete=(targetId)=>{
    setTodos(todos.filter(todo=>todo.id !== targetId))
  }
  return (  
    <div className='app '>
      <Header/>
      <Editor onCreate={onCreate}/> 
      <List onDelete={onDelete} todos={todos} onUpdate={onUpdate} />
    </div>
  )
}

export default App
