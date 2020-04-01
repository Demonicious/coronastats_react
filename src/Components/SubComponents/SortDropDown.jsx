import React, { useState, useEffect, useRef } from "react";

function useOutsideAlerter(ref, setMode) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setMode('hide');
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, setMode]);
}

const SortDropDown = (props) => {
    const [ sortMode, setSortMode ] = useState('new_cases');
    const [ mode, setMode ] = useState('hide');
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, setMode);

    useEffect(() => {
        if(sortMode !== props) {
            props.sort(sortMode);
        }
    }, [sortMode, props]);

    return(
        <div ref={wrapperRef} onClick={(e) => { mode === 'hide' ? setMode('show') : setMode('hide') }} className="searchCountryToll">Sort by
            <div className={'searchCountryTollDropdown ' + mode}>
                <a onClick={() => setSortMode('new_cases')} href className={"ddSlots sortRadio " + (sortMode === 'new_cases' ? 'active' : '')}><div className="roundSlot" /><span>New Cases</span></a>
                <a onClick={() => setSortMode('new_deaths')} href className={"ddSlots sortRadio " + (sortMode === 'new_deaths' ? 'active' : '')}><div className="roundSlot" /><span>New Deaths</span></a>
                <a onClick={() => setSortMode('all_cases')} href className={"ddSlots sortRadio " + (sortMode === 'all_cases' ? 'active' : '')}><div className="roundSlot" /><span>Total Cases</span></a>
                <a onClick={() => setSortMode('all_deaths')} href className={"ddSlots sortRadio " + (sortMode === 'all_deaths' ? 'active' : '')}><div className="roundSlot" /><span>Total Deaths</span></a>
                <a onClick={() => setSortMode('recoveries')} href className={"ddSlots sortRadio " + (sortMode === 'recoveries' ? 'active' : '')}><div className="roundSlot" /><span>Recoveries</span></a>
                <a onClick={() => setSortMode('critical')} href className={"ddSlots sortRadio " + (sortMode === 'critical' ? 'active' : '')}><div className="roundSlot" /><span>Critical</span></a>
                <a onClick={() => setSortMode('alphabetical')} href className={"ddSlots sortRadio " + (sortMode === 'alphabetical' ? 'active' : '')}><div className="roundSlot" /><span>Alphabetical</span></a>
            </div>
        </div>
    );
}

export default SortDropDown;