import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import Todo from './components/Todo'
import { useState } from 'react'
function App() {
  const TODO='todokey'
  const [todos,setTodos]=useState([
    { id:new Date().getTime(),
      text:"그거아세용",
      date:new Date().toLocaleDateString(),
      check:false
    }
  ]);
  function saveTodos(){
    localStorage.setItem(TODO,JSON.stringify(todos));
  }
  function createTodos(value){
    setTodos([...todos,value]);
    

  }
  function deleteTodos(value){
    setTodos([...todos].filter(todo =>todo.id!==value));
  }
  function deleteAllTodos(){
    setTodos([])
  }
  function checkTodos(value){
    setTodos([...todos].map(todo=>
      todo.id==value?{...todo,check:todo.check===true?todo.check=false:todo.check=true}:{...todo}
    ));
  }
  function editTodos(value,edit){
    setTodos([...todos].map(todo=>
      todo.id==value?{...todo,text:edit}:{...todo}))
    }
    const savedToDos = localStorage.getItem(TODO);
    if(savedToDos !== null){
        const parsedToDos = JSON.parse(savedToDos);
        setTodos(parsedToDos)
    }
  const savedTodos=localStorage.getItem(TODO)
  return (
    <div className='App'>
    <Header/>
    <Editor createTodos={createTodos}/>
    <Todo editTodos={editTodos} deleteAllTodos={deleteAllTodos} checkTodos={checkTodos} todos={todos} deleteTodos={deleteTodos}/>
    </div>
  )
  
}
export default App
