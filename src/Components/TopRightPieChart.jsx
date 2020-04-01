import React from 'react'
import { Doughnut } from "react-chartjs-2";

export const TopRightPieChart = (props) => {
    if(window.innerWidth >= 993) {
        const { distribution } = props;
        const codes = Object.keys(distribution);
        let data = {
            labels: [],
            datasets: [{
                data: [],
                borderWidth: 1,
                borderColor: '#333',
                backgroundColor: [
                    "#fc2751",
                    "#ac77f9",
                    "#38c75a",
                    "#286eff",
                    "#ffe740",
                    "#ff4500",
                    "#c000ff",
                    "#12ffe9",
                    "#98e445",
                    "#4585e4"
                ]
            }],
        }
        let options = {
            layout: {
                padding: {
                    left: 15,
                    right: 15,
                    top: 15,
                    bottom: 15
                }
            },
            cutOutPercentage: 20,
            maintainAspectRatio: false,
            responsive: true,
            legend: {
                display: false,
            }
        }
        for(let i = 0; i < 9; i++) {
            data.datasets[0]['data'].push(Math.round(distribution[codes[i]].percent));
            data.labels.push(distribution[codes[i]].name);
        }
        data.labels.push('Others');
        let percent = 0;
        for(let i = 9; i < codes.length; i++) {
            percent += Math.round(distribution[codes[i]].percent);
        }
        data.datasets[0]['data'].push(percent);

        return (
            <div className="rightInnerTopRightInnerTop">
                <div className="blockTopTitle mapChartTitle">Infection Distribution (%) <span id="lastUpdated" /></div>
                <div id="countriesPieChart" className="rightTopPieChartTop">
                    <div style={{width: '100%', height: '100%'}}>
                        <Doughnut options={options} data={data} />
                    </div>
                </div>
            </div>
        )
    } else return(
        <></>
    )
}

export default TopRightPieChart;
