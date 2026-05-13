import { useNavigate } from 'react-router-dom'
import './EditorButton.css'
const EditorButton = () => {
    const navi = useNavigate()
    return(
        <div className='EditorButton'>
            <button className='EditButton' onClick={()=>{
                navi("/Editor")
            }}>Edit</button>
            </div>
    )
}
export default EditorButton