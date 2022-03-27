import "./Landing.css"
import logo from "../images/logo.svg"
import { Link } from "react-router-dom";

interface ceva{
    allowNavbar:Function
}
function LandingPage(props:ceva) {
    return (
        <div className="intro">
            <div className="black"></div>  
            <div className="white"></div>
            <div className="boxfather">
                <div className="box">
                    <img src={logo} alt="Logo" className="logo"/>
                    <h1>Pregognition</h1>
                    <Link to="/login"><button>Enter</button></Link>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;