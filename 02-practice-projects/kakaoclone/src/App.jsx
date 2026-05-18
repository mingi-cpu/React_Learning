import { Routes,Route } from 'react-router-dom'
import './App.css'
import Chat from './pages/Chat'
import Chatting from './pages/Chatting'
import Home from './pages/Home'
import Others from './pages/Others'
function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/chat" element={<Chat/>} />
      <Route path='/other' element={<Others/>}/>
      <Route path="/chat/:id" element={<Chatting/>} />
    </Routes>
    </div>
  )
}

export default App
