import {useEffect, useState} from "react";
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


export default function Charts(){
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const [dataSet, setData] = useState([])
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
            },
            title: {
                display: true,
                text: 'Chard for company',
            },
        },
    };
    let data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: dataSet,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: [1,1,1,2,1,11,1],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    // @ts-ignore
    useEffect( ()=>{
        fetch("http://localhost:5000/api/average/FB/Leadership & Governance").then( async (response) =>{
            const data = await response.json()
            setData(data)
            // @ts-ignore
        })
    },[ ])
    return (
        <Line options={options} data={data} />
    )
}
