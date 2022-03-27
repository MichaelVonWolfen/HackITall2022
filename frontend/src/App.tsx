import Navbar from "./components/Navbar/navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ChartsPage from "./components/ChartsPage/CharttsPage";
import {useState} from "react";

interface CePLM{
    data:any,
    dataSet:any
}
function App() {
    const[searchInput, setSearchInput] = useState("AAPL")
    return (
        <div className="App">
            <Navbar dataSetter={setSearchInput}/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<div>Hello Home</div>}/>
                    <Route path="/charts" element={<ChartsPage data={searchInput}/>} />
                    <Route path="/about" element={<div/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
