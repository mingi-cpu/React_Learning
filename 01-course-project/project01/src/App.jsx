import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import { useState  } from 'react'
import Even from './components/Even'
import Odd from './components/Odd'
import Controller2 from './components/Controller2'
function App() {
  const [count,setCount]=useState(0);

  const onClickButton = (value) => {
  setCount(count => count + value);
};
  const onClickButton2 = (value) =>{
    setCount(value)
  }
  return (
    <div className='App'>
    <h1>Simple Counter</h1> 
    <section>
    <Viewer count={count}/> 
    {count%2===0? <Even/>:<Odd/>}
    </section>
    <section>
    <Controller className="contorller" onClickButton={onClickButton}/>
    <Controller2 className="contorller" onClickButton2={onClickButton2}/>
    </section>
    </div>
  )
}

export default App