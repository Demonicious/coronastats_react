import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";

const CountrySideItem = (props) => {
    const { data } = props;

    /* let deaths = {
        percent: data.comparison.deaths.percent + '%'
    };
    let cases = {
        percent: data.comparison.cases.percent + '%'
    };

    if(data.comparison.deaths.arrow === 0) {
        deaths = {
            ...deaths,
            arrow: <FontAwesomeIcon icon={faLongArrowAltDown} className='green' />,
            class: 'green',
            percent: <span className={"smPercentage green"}>{deaths.percent}</span>
        };
    } else if(data.comparison.deaths.arrow === 2) {
        deaths = {
            ...deaths,
            arrow: <FontAwesomeIcon icon={faLongArrowAltUp} className='red' />,
            class: 'red',
            percent: <span className={"smPercentage red"}>{deaths.percent}</span>
        };
    } else {
        deaths = {
            ...deaths,
            arrow: <></>,
            class: '',
            percent: ''
        };
    }

    if(data.comparison.cases.arrow === 0) {
        cases = {
            ...cases,
            arrow: <FontAwesomeIcon icon={faLongArrowAltDown} className='green' />,
            class: 'green',
            percent: <span className={"smPercentage green"}>{cases.percent}</span>
        };
    } else if(data.comparison.cases.arrow === 2) {
        cases = {
            ...cases,
            arrow: <FontAwesomeIcon icon={faLongArrowAltUp} className='red' />,
            class: 'red',
            percent: <span className={"smPercentage red"}>{cases.percent}</span>
        };
    } else {
        cases = {
            ...cases,
            arrow: <></>,
            class: '',
            percent: ''
        };
    } */

    let new_cases = data.new_cases === 0 ? <></> : <span className="newCases">+{data.new_cases.toLocaleString()} Cases {/* {cases.arrow} {cases.percent} */}</span>
    let new_deaths = data.new_deaths === 0 ? <></> : <span className="newDeaths">+{data.new_deaths.toLocaleString()} Deaths {/* {deaths.arrow} {deaths.percent} */}</span>

    return(
        <div style={props.style} className="searchCountryAreaItem countryItem countryDrop">
        <div className="searchCountryAreaOverlay">
            <div className="overlayBlocks countryOverlayLap"><img alt={data.code} width={30} height={30} src={data.flag} className="img-responsivee" /><span className="overlayBlocksSubTitle countryNameBlock">{data.name}</span></div>
            <div className="overlayBlocks">{data.all_cases.toLocaleString()}<span className="overlayBlocksSubTitle">Infections</span></div>
            <div className="overlayBlocks">{data.all_deaths.toLocaleString()}<span className="overlayBlocksSubTitle">Deaths</span></div>
            <div className="overlayBlocks">{data.recoveries.toLocaleString()}<span className="overlayBlocksSubTitle">Recoveries</span></div>
            <div className="overlayBlocks">{data.critical.toLocaleString()}<span className="overlayBlocksSubTitle">Critical</span></div>
            <div onClick={() => props.clickHandler(data.name)} className="overlayBlocks moreBtn cDetailsBtn"><FontAwesomeIcon icon={faChartBar} /></div>
        </div>
        <div className="searchCountryAreaItemImg"><img alt={data.code} width={30} height={30} src={data.flag} className="img-responsivee" /></div>
        <div className="searchCountryAreaItemDetails">
                <div className="searchCountryAreaItemDetailsTitle countryItemName">{data.name} <span className="milPOP">{data.per1mpop.toLocaleString()} / 1M</span></div>
            <div className="searchCountryLastUpdate"><span className="newCasesSubtitle">{data.all_cases.toLocaleString()} Cases</span> <span className="ampersAnd">&amp;</span> <span className="newDeathsSubtitle">{data.all_deaths.toLocaleString()} Deaths</span></div>
        </div>
        {/*<div className="searchCountryAreaItemSickNp dataSm"><div className="newCases">{new_cases} { cases.arrow } <span className={"smPercentage " + cases.class}>{cases.percent}</span></div><div className="newDeaths">{new_deaths} { deaths.arrow } <span className={"smPercentage " + deaths.class}>{deaths.percent}</span></div></div>*/}
        <div className="searchCountryAreaItemSickNp dataSm">{new_cases} {new_deaths}</div>
        </div>

    );
}

export default CountrySideItem;