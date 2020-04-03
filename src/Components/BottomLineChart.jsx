import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { Bar } from "react-chartjs-2";
import LineChartMaker from "./../Lib/LineChartMaker";

const showHelpToast = () => {
    toast(<>You can <strong>Enable / Disable</strong> specific Data-sets in the Bar Charts by clicking on their Icon from the <strong>Legend</strong>.</>, {
        autoClose: 6000,
        style: {
            color: '#000'
        }
    });
}

export const BottomLineChart = (props) => {
    if(window.innerWidth >= 993) {
        const { lines } = props;
        const [data, options] = LineChartMaker(lines);
        return (
            <div className="bottomLineChartArea">
                <div className="blockTopTitle bottomMainTitle" id="lineChartsTitle">Growth Over Time <span onClick={showHelpToast} className="tooltipSpan"><FontAwesomeIcon icon={faQuestion} /></span></div>
                <div id="growthChart" className="bottomLineChartAreaMain">
                    <div style={{width: '100%', height: '100%'}}>
                        <Bar data={data} options={options} />
                    </div>
                </div>
            </div>
        )
    } else {
        return <></>
    }
}

export default BottomLineChart;
