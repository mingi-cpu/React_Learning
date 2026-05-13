import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import './Memo.css'
const Memo = ({id,title,text,date}) => {
    const navi = useNavigate();
    function onClickButton(){
        navi(`/Memo/${id}`);
    }
    return(
        <div className='Memo' onClick={onClickButton}>
            <h5>{title}</h5>
            <p>{date}</p>
            <p>{text}</p>
        </div>
    )
}
export default Memo