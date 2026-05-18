import SideBar from "../components/SideBar"
import "./Home.css"
const Home = ()=>{
    return(
        <div className="Home">
            <SideBar/>
            <div>
                <h5>친구</h5>
                <img className="PFP" src="/public/PFP.jpg" alt="PFP" />
            </div>
        </div>
    )
}
export default Home