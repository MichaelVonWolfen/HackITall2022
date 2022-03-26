import "./ChartsPage.sass"
import Charts from "../helpers/ChartsThing/Charts";
import Navbar from "../Navbar/navbar";
export default function ChartsPage(){
    return(
        <div className="chartsContainer">
            <Navbar/>
            <Charts company={"FB"} category={"Leadership & Governance"}/>
        </div>
    )
}