import './App.css'
import { useReducer,useRef,createContext } from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Diary from "./pages/Diary"
import New from "./pages/New"
import Not from './pages/Not' 
import Edit from './pages/Edit'
export const DiaryStateContext=createContext()
export const DiaryDispatchContext=createContext() 
const mockData = [
  {id:1,
  createdDate:new Date("2026-04-10").getTime(),
  emotionid:1 ,
  content:"1번일기내용", },
  {id:2,
  createdDate:new Date("2026-04-11").getTime(),
  emotionid:2 ,
  content:"2번일기내용",},
  {id:3,
  createdDate:new Date("2026-03-30").getTime(),
  emotionid:3 ,
  content:"3번일기내용",},
]
function reducer(state,action){
  switch(action.type){
    case "CREATE":
      return [action.data,...state]
    case "UPDATE":
      return state.map((item)=>item.id==action.data.id
      ? action.data:item)
    case "DELETE":
      console.log()
      return state.filter((item)=>item.id!=action.data.id)
    default:
      return state
    }}
function App() {
  const [data,dispatch]=useReducer(reducer,mockData); 
  const idRef = useRef(4)
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
