import React, { useState } from 'react'

export const USComponent = (props) => {
    const { state } = props;
    const [ mode, setMode ] = useState('inactive');
    let flag = state.name ? state.name.toLowerCase().replace(/\s+/g, '_') : null;
    if (flag === 'other' || flag === null) flag = "https://coronastats.co/images/flags/unknown.png";
    else flag = 'https://coronastats.co/images/flags/us_states/' + flag + '.png';
    let countyData = <></>;
    if(mode === 'active') {
        countyData = state.counties.map((c, i) => {
            return(
                <div className="dataD" key={i}>
                    <div className="innD loc">
                        <div className="inD">
                            <div className="countryDetails"><span className="cName m-l-2">{c.name ? c.name : 'Unknown'}</span></div>
                        </div>
                    </div>
                    <div className="innD">
                        <div className="inD case">
                            {c.all_cases}
                        </div>
                    </div>
                    <div className="innD">
                        <div className="inD deaths">
                            {c.all_deaths}
                        </div>
                    </div>
                    <div className="innD">
                        <div className="inD rate">
                        </div>
                    </div>
                </div>
            );
        })
    }
    return (
        <>
            <div onClick={() => { mode === 'inactive' ? setMode('active') : setMode('inactive') }} className={"dataD accordion-item " + mode}>
                <div className="innD loc">
                    <div className="inD">
                        <div className="countryDetails"><img src={flag} alt={state.name} /><span className="cName m-l-40">{state.name ? state.name : 'Unknown'}</span></div>
                    </div>
                </div>
                <div className="innD">
                    <div className="inD case">
                        {state.all_cases}
                    </div>
                </div>
                <div className="innD">
                    <div className="inD deaths">
                        {state.all_deaths}
                    </div>
                </div>
                <div className="innD">
                    <div className="inD rate">
                    </div>
                </div>
                <div className={"content " + mode}>
                    {countyData}
                </div>
            </div>
        </>
    );
}
