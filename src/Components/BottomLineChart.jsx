import React from 'react'
import { Line } from "react-chartjs-2";
import LineChartMaker from "./../Lib/LineChartMaker";

export const BottomLineChart = (props) => {
    if(window.innerWidth >= 993) {
        const { lines } = props;
        const [data, options] = LineChartMaker(lines);
        return (
            <div className="bottomLineChartArea">
                <div className="blockTopTitle bottomMainTitle" id="lineChartsTitle">Growth Over Time</div>
                <div id="growthChart" className="bottomLineChartAreaMain">
                    <div style={{width: '100%', height: '100%'}}>
                        <Line data={data} options={options} />
                    </div>
                </div>
            </div>
        )
    } else {
        return <></>
    }
}

export default BottomLineChart;
