import './App.css'
import { useReducer,useRef,createContext, useEffect, useState } from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Diary from "./pages/Diary"
import New from "./pages/New"
import Not from './pages/Not'    
import Edit from './pages/Edit'
export const DiaryStateContext=createContext()
export const DiaryDispatchContext=createContext() 
function reducer(state,action){
  let nextstate;
  switch(action.type){ 
    case "INIT":return action.data
    case "CREATE":
      {nextstate=  [action.data,...state];
        break;}
    case "UPDATE":
      {nextstate= state.map((item)=>item.id==action.data.id
      ? action.data:item);
    break;}
    case "DELETE":
      {nextstate= state.filter((item)=>item.id!=action.data.id);
      break;}
    default:
      return state
    }
    localStorage.setItem("diary",JSON.stringify(nextstate));
    return nextstate
  } 
function App() {
  const [isLoading,setIsLoading]=useState(true)
  const [data,dispatch]=useReducer(reducer,[]);
  const idRef = useRef(0);
  useEffect(()=>{
    const storedData=localStorage.getItem("diary")
    if (!storedData){
      setIsLoading(false)
      return;
    }
    const parsedData=JSON.parse(storedData);
    if (!Array.isArray(parsedData)){
       return;
    }
    let maxId=0;
    parsedData.forEach(item => {
      if(Number(item.id)>maxId){
        maxId=Number(item.id)
      }
      idRef.current=maxId+1;
    });
    dispatch({
      type:"INIT",
      data:parsedData
    });
    setIsLoading(false)
  },[]) 
  const onCreate = (createdDate,emotionid,content) => {
    dispatch({
      type:"CREATE",
      data:{
        id:idRef.current++,
        emotionid,
        createdDate,
        content,
      }})}
  const onUpdate = (id,createdDate,emotionid,content)=>{
    dispatch({
      type:"UPDATE",
      data:{
        id,
        emotionid,
        createdDate,
        content,
      }})}
  const onDelete = (id)=>{
    dispatch({
      type:"DELETE",
      data:{
        id
      }
    })
  }  
  if (isLoading){
    return <div>...Loading</div>
  }
  return (
    <>
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{
        onCreate,
        onDelete,
        onUpdate,
        }}>
        <Routes>
           <Route path="/" element={<Home/>} /> 
           <Route path="/new" element={<New/>} /> 
           <Route path='/edit/:id' element={<Edit/>}/>
           <Route path="/diary/:id" element={<Diary/>} /> 
           <Route path='*' element={<Not/>}/>  
        </Routes>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
    </>
  ) 
} 

export default App
