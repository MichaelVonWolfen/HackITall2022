import React, {useEffect, useState} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import "./PieChart.sass"

interface Pie{
    company:string
}
export default function Piechart(props:Pie){
    const [factors, setFactors] = useState({})
    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
        labels: ['Environmental', 'Social', 'Governance'],
        datasets: [
            {
                label: 'ESG Chart',
                data: factors!=={}?
                    // @ts-ignore
                    [factors['Environment'], factors["Social"], factors["Governance"]]:
                    [0, 0, 0],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
                labels:{
                    color:"#FFF",
                },
            },
            title: {
                display: true,
                color:"#FFF"
            },
        },
        maintainAspectRatio: false,
    };
    useEffect(()=>{
        fetch(`http://localhost:5000/api/factors/${props.company}`).then(async response=>{
            let data = await response.json()
            console.log(data)
            setFactors(data)
        })
    }, [props.company])
    return (
        <div className="pieContainer">
            <Doughnut data={data} options={options}/>
        </div>
    )
}
