const Editor = () =>{
    function onClickButton(){
        
    }
    return(
        <div>
            <div>editor</div>
            <form action="">
                <input required type="text" placeholder="제목"/>
                <textarea required placeholder="오늘은 어떤일이 있었나요?"></textarea>
                <button onClick={onClickButton}>저장</button>
            </form>
        </div>
    )
}
export default Editor