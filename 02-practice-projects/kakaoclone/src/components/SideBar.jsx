import { useNavigate } from 'react-router-dom'
import './SideBar.css'
const SideBar = ({color}) =>{
    const nav=useNavigate()
    return(
    <div className='SideBar'>
        <i onClick={()=>nav("/")} className={`fi fi-sr-user ${color==1?"":"gray"}`}></i>
        <i onClick={()=>nav("/chat")} className={`fi fi-ss-beacon ${color==2?"":"gray"}`}></i>
        <i onClick={()=>nav("/other")} className={`fi fi-rc-menu-dots ${color==3?"":"gray"}`}></i>
    </div>
    )
}
export default SideBar