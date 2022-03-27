import Navbar from "./components/Navbar/navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ChartsPage from "./components/ChartsPage/CharttsPage";
import {useState} from "react";
import LandingPage from "./pages/Landing"

function App() {
    const [a, setA] = useState(window.location.href.split("/")[window.location.href.split("/").length - 1] !== "")

    const[searchInput, setSearchInput] = useState("AAPL")
    return (
        <div className="App">
            {a && <Navbar dataSetter={setSearchInput}/>}
            <BrowserRouter>
                <Routes>
                    <Route path="/charts" element={<ChartsPage data={searchInput}/>} />
                    <Route path="/" element={<LandingPage allowNavbar={setA}/>}/>
                    <Route path="/about" element={<div/>} />
                </Routes>
            </BrowserRouter>
        </div>
  );
}

export default App;
