import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import "./PieChart.sass"
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Environmental', 'Social', 'Governance'],
    datasets: [
        {
            label: 'ESG Chart',
            data: [12, 19, 3],
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


export default function Piechart(){
    return (
        <div className="pieContainer">
            <Doughnut data={data} options={options}/>
        </div>
    )
}
