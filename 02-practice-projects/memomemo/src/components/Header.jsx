import "./Header.css"
import { useState } from "react";
const Header = () => {
    const date = new Date().toLocaleDateString();
    return(
        <div className="Header">
            <h1>MINGI MEMO</h1>
            <h3>to day is {date}</h3>
        </div>
    )
}
export default Header