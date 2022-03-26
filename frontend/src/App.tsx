import Navbar from "./components/Navbar/navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Charts from "./components/ChartsThing/Charts";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div>Hello Home</div>}/>
                <Route path="/charts" element={<Charts/>} />
                <Route path="/about" element={<div/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
