import './App.css'
import { useRef,useReducer  } from 'react'
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
const reducer = (state,action) => {
   switch(action.type){
      case "CREATE": return [action.date,...state]
      case "UPDATE": return state.map((item)=>(item.id===action.targetId? {...item,isDone:!item.isDone}
      :item))
      case "DELETE": return state.filter((item)=>item.id!==action.targetId  )
      default:return state
   }
}
function App() {
  const [todos, dispatch] = useReducer(reducer,mockData)
  const idref=useRef(3)
  const onCreate= (content) => {
    dispatch({
      type: "CREATE",
      date:{
        id:idref.current ++,
        isDone:false,
        content:content,
        date: new Date().getTime()
      }
    })
  }
  const onUpdate = (targetId) => {
      dispatch({
        type:"UPDATE",
        targetId:targetId
      })
  }
  const onDelete=(targetId)=>{
    dispatch({
      type:"DELETE",
      targetId:targetId,
    })
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
