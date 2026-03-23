const Controller2=({onClickButton2})=>{
    return <div className="controller">
       <button onClick={()=>{
        onClickButton2(-10000)
       }}>-10000</button> 
       <button onClick={()=>{
        onClickButton2(-100)
       }}>-100</button>
       <button onClick={()=>{
        onClickButton2(0)
       }}>0</button>
       <button onClick={()=>{
        onClickButton2(100)
       }}>100</button>
       <button onClick={()=>{
        onClickButton2(10000)
       }}>10000</button>
    </div>
}
export default Controller2