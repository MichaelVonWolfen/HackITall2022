import "./ChartsPage.sass"
import LineChart from "../helpers/ChartsThing/LineChart";
import {useState} from "react";
import Piechart from "../helpers/PieChart/Piechart";
interface Life {
    data:any
}
export default function ChartsPage(props:Life){
    const categories = ["Leadership & Governance", "Human Capital", "Social Capital", "Environment"];
    const [category, setCategory] = useState("Leadership & Governance")
    const onChangeHandler = (e:any) =>{
        setCategory(e.target.value)
    }
    return(
        <div className="chartsContainer">
            <h1>ESG Propagation And analysis</h1>
            <LineChart company={props.data} category={category}/>
            <select className="form-select" aria-label="Select categories" onChange={onChangeHandler}>
                {categories.map((category, index) =>{
                    return <option selected={index === 0} value={category}>{category}</option>
                })}
            </select>
            <Piechart company={props.data}/>
        </div>
    )
}