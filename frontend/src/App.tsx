import Navbar from "./components/Navbar/navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ChartsPage from "./components/ChartsPage/CharttsPage";
import LandingPage from "./pages/Landing"

function App() {
  return (
    <div className="App">

        {/* <Navbar/> */}
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/charts" element={<ChartsPage/>} />
                <Route path="/about" element={<div/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
