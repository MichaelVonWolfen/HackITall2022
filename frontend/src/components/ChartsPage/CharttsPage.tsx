import "./ChartsPage.sass"
import Charts from "../helpers/ChartsThing/Charts";
import {useState} from "react";
interface PLMM {
    data:any
}
export default function ChartsPage(props:PLMM){
    const categories = ["Leadership & Governance", "Human Capital", "Social Capital", "Environment"];
    const [category, setCategory] = useState("Leadership & Governance")
    const onChangeHandler = (e:any) =>{
        setCategory(e.target.value)
    }
    return(
        <div className="chartsContainer">
            <Charts company={props.data} category={category}/>
            <select className="form-select" aria-label="Select categories" onChange={onChangeHandler}>
                {categories.map((category, index) =>{
                    return <option selected={index === 0} value={category}>{category}</option>
                })}
            </select>
        </div>
    )
}