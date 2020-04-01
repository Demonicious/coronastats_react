import React from "react";
import { toast } from "react-toastify"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltDown, faLongArrowAltUp, faQuestion } from "@fortawesome/free-solid-svg-icons";

const showHelpToast = () => {
    toast(<><FontAwesomeIcon icon={faLongArrowAltUp} className="green" /><FontAwesomeIcon icon={faLongArrowAltDown} className="green" /> &amp; <FontAwesomeIcon icon={faLongArrowAltUp} className="red" /><FontAwesomeIcon icon={faLongArrowAltDown} className="red" /> indicate the <strong>Increase / Decrease</strong> &amp; <strong>Betterment / Worsening</strong> of the situation related to a statistic. <br/><br/> Death Rate &amp; Recovery Rate is calculated based on <strong>Closed Cases</strong>.</>, {
        autoClose: 6000,
        style: {
            color: '#000'
        }
    });
}

const StatsBlockPC = (props) => {
    return(
        <>
        <div className="rightInnerTopRightInnerBottom">
            <div className="blockTopTitle mapChartTitle">Virus Statistics <span onClick={showHelpToast} className="tooltipSpan"><FontAwesomeIcon icon={faQuestion} /></span></div>
                                    <div className="rightTopPieChartBottom">
        <div id="virusStatsBlock2" className="virusStatsBlock">
                                <div className="virusStatsBlockItem">
                                    <div className="virusStatsBlockItemInner">
                                    <span className="title recoveryRate">Recovery Rate</span>
                                    <span id="recoveryRateAlt" className="data"><span className="virusStatsBlockIcon">{props.comparison.recoveryRate === 2 ? <></> : props.comparison.recoveryRate === 1 ? <FontAwesomeIcon icon={faLongArrowAltUp} className="green" /> : <FontAwesomeIcon icon={faLongArrowAltDown} className="red" />}</span> {props.general.recovery_rate_p}%</span>
                                    </div>
                                </div>
                                <div className="virusStatsBlockItem">
                                    <div className="virusStatsBlockItemInner">
                                    <span className="title deathRate">Death Rate</span>
                                    <span id="deathRateAlt" className="data"><span className="virusStatsBlockIcon">{props.comparison.deathRate === 2 ? <></> : props.comparison.deathRate === 1 ? <FontAwesomeIcon icon={faLongArrowAltUp} className="red" /> : <FontAwesomeIcon icon={faLongArrowAltDown} className="green" />}</span> {props.general.death_rate_p}%</span>
                                    </div>
                                </div>
                                <div className="virusStatsBlockItem">
                                    <div className="virusStatsBlockItemInner">
                                    <span className="title survivalRate">Mild Cases</span>
                                    <span id="activeRateAlt" className="data"><span className="virusStatsBlockIcon">{props.comparison.activeCases === 2 ? <></> : props.comparison.activeCases === 1 ? <FontAwesomeIcon icon={faLongArrowAltUp} className="red" /> : <FontAwesomeIcon icon={faLongArrowAltDown} className="green" />}</span> {props.general.active_cases_p}%</span>
                                    </div>
                                </div>
                                <div className="virusStatsBlockItem">
                                    <div className="virusStatsBlockItemInner">
                                    <span className="title criticalRate">Critical Cases</span>
                                    <span id="criticalRateAlt" className="data"><span className="virusStatsBlockIcon">{props.comparison.criticalRate === 2 ? <></> : props.comparison.criticalRate === 1 ? <FontAwesomeIcon icon={faLongArrowAltUp} className="red" /> : <FontAwesomeIcon icon={faLongArrowAltDown} className="green" />}</span> {props.general.critical_rate_p}%</span>
                                    </div>
                                </div>
                                <div className="virusStatsBlockItem hlp">
                                    <div className="virusStatsBlockItemInner">
                                    <span className="title infectedRate">Affected Countries</span>
                                    <span id="affectedCountries2" className="data">{props.general.affected_countries}</span>
                                    </div>
                                </div>
                                <div className="virusStatsBlockItem hlp">
                                    <div className="virusStatsBlockItemInner">
                                    <span className="title survivalRate">Incubation Period</span>
                                    <span className="data">1-14 Days</span>
                                    </div>
                                </div>
                                {/*<div className="virusStatsBlockItem fullWidth">
                                    <div className="virusStatsBlockItemInner counterInner">
                                    <span className="title dssbRate hlp">Outbreak Started</span>
                                    <div className="counterInnerOverlay">
                                        <div className="counterInnerBlocks">
                                        <span id="countupDays">12</span>
                                        <span>Days</span>
                                        </div>
                                        <div className="counterInnerBlocks">
                                        <span id="countupHours">12</span>
                                        <span>Hours</span>
                                        </div>
                                        <div className="counterInnerBlocks">
                                        <span id="countupMinutes">12</span>
                                        <span>Minutes</span>
                                        </div>
                                        <div className="counterInnerBlocks">
                                        <span id="countupSeconds">12</span>
                                        <span>Seconds</span>
                                        </div>
                                        <span id="timer" />
                                    </div>
                                    </div>
                                </div>*/}
                                </div></div></div></>
    )
}

export default StatsBlockPC;