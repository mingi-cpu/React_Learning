import "./Header.css"
const Header = () =>{
    return <div className="Header">
        <div className="Header_Head">Today is...</div>
        <div className="Header_Date">{new Date().toDateString()}</div>
    </div>
}
export default Header