import "./Landing.css"
import logo from "../images/logo.svg"

function LandingPage() {
    return (
        <div className="intro">
            <div className="black"></div>  
            <div className="white"></div>
            <div className="boxfather">
                <div className="box">
                    <img src={logo} alt="Logo" className="logo"/>
                    <button>Enter</button>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;