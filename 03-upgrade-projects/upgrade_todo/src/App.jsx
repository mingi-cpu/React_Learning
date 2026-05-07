import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import Todo from './components/Todo'
import { useEffect, useState } from 'react'
function App() {
  const TODO='todokey'
  const savedToDos = localStorage.getItem(TODO);
  const parsedToDos = saveTodos?JSON.parse(savedToDos):[];
  const [todos,setTodos]=useState(parsedToDos);

  useEffect(saveTodos,[todos])
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
  return (
    <div className='App'>
    <Header/>
    <Editor createTodos={createTodos}/>
    <Todo editTodos={editTodos} deleteAllTodos={deleteAllTodos} checkTodos={checkTodos} todos={todos} deleteTodos={deleteTodos}/>
    </div>
  )
  
}
export default App
