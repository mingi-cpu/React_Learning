import { useNavigate } from 'react-router-dom'
import './Memo.css'
const Memo = () => {
    const navi = useNavigate()
    function onClickButton(){
        navi("/Memo")
    }
    return(
        <div className='Memo' onClick={onClickButton}>
            <h5>메모제목</h5>
            <p>{new Date().toLocaleDateString()}</p>
            <p>메모 내용</p>
        </div>
    )
}
export default Memo