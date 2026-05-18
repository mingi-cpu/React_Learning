import SideBar from "../components/SideBar"
import "./Home.css"
const Home = ()=>{
    return(
        <div className="Home">
            <SideBar color={"1"}/>
            <div className="HomeRight">
                <div className="HomeHead">
                    <h1>친구</h1>
                    <i class="fi fi-rr-search"></i>
                    <i class="fi fi-rr-user-add"></i>
                </div>
                <div className="HomeMy">
                    <img className="PFP" src="/public/PFP.jpg" alt="PFP"/>
                    <div className="HomeMy_text">
                        <h5>라이언</h5>
                        <p>오늘도 안녕</p>
                    </div>
                </div>
                <div className="HomeFriend">
                    <p>니 친구 없잖아..</p>
                </div>
            </div>
        </div>
    )
}
export default Home