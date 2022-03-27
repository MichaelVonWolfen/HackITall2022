import {useEffect, useState} from "react";
import "./Charts.sass"
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

interface ChartsData {
    company:String,
    category:String
}
export default function Charts(props:ChartsData){
    const [labels, setLabels] = useState(['']);
    const [dataSet, setData] = useState([])
    const [AVGdataSet, setAvgData] = useState([])
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

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
                text: `Chart comparing ${props.company} and Average for the "${props.category}" category`,
                color:"#FFF"
            },
        },
        maintainAspectRatio: false,
        scales: {
            yAxes:{
                grid: {
                    drawBorder: true,
                    color: '#676767',
                },
                ticks:{
                    beginAtZero: true,
                    color: 'white',
                    fontSize: 12,
                }
            },
            xAxes: {
                grid: {
                    drawBorder: true,
                    color: '#676767',
                },
                ticks:{
                    beginAtZero: true,
                    color: 'white',
                    fontSize: 12,
                }
            },
        }
    };
    let data = {
        labels,
        datasets: [
            {
                label: props.company.toString(),
                data: dataSet,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: AVGdataSet,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    useEffect( ()=>{
        fetch(`http://localhost:5000/api/average/${props.company}/${props.category}`).then(async response=>{
            let data = await response.json()
            setData(data)
        })
        fetch(`http://localhost:5000/api/average/${props.category}`).then(async response=>{
            let data = await response.json()
            setAvgData(data)
        })
        let labels = []
        for (let i = 0; i < 5; i++){
            let date = new Date()
            labels.push((date.getDate() - (5 - i)).toString())
        }
        setLabels(labels)
    },[props])
    return (
        <div className="chartsContainer">
            <div className="chart">
                <Line options={options} data={data} />
            </div>
        </div>
    )
}
