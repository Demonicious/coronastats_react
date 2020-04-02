import React, { useState } from 'react'

export const GenericComponent = (props) => {
    const { state } = props;
    const [mode, setMode] = useState('inactive');
    let regionData = <></>;
    if (mode === 'active') {
        regionData = props.regions.map((c, i) => {
            return (
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
            <div onClick={() => { mode === 'inactive' ? setMode('active') : setMode('inactive') }} className={"dataD " + mode + (props.regions.length > 0 ? ' accordion-item' : '')}>
                <div className="innD loc">
                    <div className="inD">
                        <div className="countryDetails"><span className="cName m-l-0">{state.name ? state.name : 'Unknown'}</span></div>
                    </div>
                </div>
                <div className="innD">
                    <div className="inD case">
                        {state.all_cases}
                    </div>
                </div>
                <div className="innD">
                    <div className="inD deaths">
                    </div>
                </div>
                <div className="innD">
                    <div className="inD rate">
                    </div>
                </div>
                <div className={"content " + mode}>
                    {regionData}
                </div>
            </div>
        </>
    );
}
