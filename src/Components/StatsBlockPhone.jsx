import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltUp, faLongArrowAltDown } from "@fortawesome/free-solid-svg-icons";

const StatsBlockPhone = (props) => {
    if(window.innerWidth <= 992) {
        return (
            <div id="virusStatsBlock" className="virusStatsBlock vbmbl">
                <div className="virusStatsBlockItem">
                    <div className="virusStatsBlockItemInner">
                        <span className="title survivalRate">Mild Cases</span>
                        <span id="activeRate" className="data"><span className="virusStatsBlockIcon">{props.comparison.activeCases === 2 ? <></> : props.comparison.activeCases === 1 ? <FontAwesomeIcon icon={faLongArrowAltUp} className="red" /> : <FontAwesomeIcon icon={faLongArrowAltDown} className="green" />}</span> {props.general.active_cases_p}%</span>
                    </div>
                </div>
                <div className="virusStatsBlockItem">
                    <div className="virusStatsBlockItemInner">
                        <span className="title deathRate">Death Rate</span>
                        <span id="deathRate" className="data"><span className="virusStatsBlockIcon">{props.comparison.deathRate === 2 ? <></> : props.comparison.deathRate === 1 ? <FontAwesomeIcon icon={faLongArrowAltUp} className="red" /> : <FontAwesomeIcon icon={faLongArrowAltDown} className="green" />}</span> {props.general.death_rate_p}%</span>
                    </div>
                </div>
                <div className="virusStatsBlockItem">
                    <div className="virusStatsBlockItemInner">
                        <span className="title recoveryRate">Recovery Rate</span>
                        <span id="recoveryRate" className="data"><span className="virusStatsBlockIcon">{props.comparison.recoveryRate === 2 ? <></> : props.comparison.recoveryRate === 1 ? <FontAwesomeIcon icon={faLongArrowAltUp} className="green" /> : <FontAwesomeIcon icon={faLongArrowAltDown} className="red" />}</span> {props.general.recovery_rate_p}%</span>
                    </div>
                </div>
                <div className="virusStatsBlockItem">
                    <div className="virusStatsBlockItemInner">
                        <span className="title criticalRate">Critical Cases</span>
                        <span id="criticalRate" className="data"><span className="virusStatsBlockIcon">{props.comparison.criticalRate === 2 ? <></> : props.comparison.criticalRate === 1 ? <FontAwesomeIcon icon={faLongArrowAltUp} className="red" /> : <FontAwesomeIcon icon={faLongArrowAltDown} className="green" />}</span> {props.general.critical_rate_p}%</span>
                    </div>
                </div>
                <div className="virusStatsBlockItem hlp">
                    <div className="virusStatsBlockItemInner">
                        <span className="title infectedRate">Affected Countries</span>
                        <span id="affectedCountries" className="data">{props.general.affected_countries}%</span>
                    </div>
                </div>
                <div className="virusStatsBlockItem hlp">
                    <div className="virusStatsBlockItemInner">
                        <span className="title survivalRate">Incubation Period</span>
                        <span id="criticalRate" className="data">1-14 Days</span>
                    </div>
                </div>
            </div>
        );
    } else return <></>
}

export default StatsBlockPhone;