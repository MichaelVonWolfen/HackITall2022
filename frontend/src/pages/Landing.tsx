import "./Landing.css"
import logo from "../images/logo.svg"
import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <div className="intro">
            <div className="black"></div>  
            <div className="white"></div>
            <div className="boxfather">
                <div className="box">
                    <img src={logo} alt="Logo" className="logo"/>
                    <h1>Pregognition</h1>
                    <Link to="/charts"><button>Enter</button></Link>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;