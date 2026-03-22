const Controller=({onClickButton})=>{
    return <div>
       <button onClick={()=>{
        console.log("클릭됨")
        onClickButton(-1) 
       }}>-1</button>
       <button onClick={()=>{
        onClickButton(-10)
       }}>-10</button> 
       <button onClick={()=>{
        onClickButton(-100)
       }}>-100</button>
       <button onClick={()=>{
        onClickButton(100)
       }}>+100</button>
       <button onClick={()=>{
        onClickButton(10)
       }}>+10</button>
       <button onClick={()=>{
        onClickButton(1)
       }}>+1</button>
    </div>
}
export default Controller