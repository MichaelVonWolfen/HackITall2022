import "./ChartsPage.sass"
import Charts from "../helpers/ChartsThing/Charts";
export default function ChartsPage(){
    return(
        <div className="chartsContainer">
            <Charts company={"FB"} category={"Leadership & Governance"}/>
        </div>
    )
}