import React, {useState} from "react";
import UpdateInfo from "./SubComponents/UpdateInfo";
import SortDropDown from "./SubComponents/SortDropDown";
import CountrySideList from "./SubComponents/CountrySideList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { CountryDetailsBackdrop } from "./SubComponents/CountryDetailsBackdrop";

const CountryListSection = (props) => {
    const [query, setQuery] = useState('');
    const [mode, setMode] = useState('new_cases');
    const [country, setCountry] = useState(null);
    const countryItem = country ? props.country_stats.filter((c) => c.name === country)[0] : null;
    return(
        <>
            <CountryDetailsBackdrop countryDataTables={props.countryDataTables} setCountryItem={() => { setCountry(null); }} country={countryItem} />
            <div className="sidebarCountrySearch">
                <UpdateInfo time={props.time} />
                <>
                    <input onChange={(e) => setQuery(e.target.value)} value={query} id="searchText" autoFocus={true} autoComplete="nope" type="text" name="Search" placeholder={`Search ${props.affected_countries} Regions`} className="searchCountryInput" />
                    {
                        query !== '' ? <FontAwesomeIcon icon={faTimesCircle} className="clearSearch" onClick={() => setQuery('')} /> : <></>
                    }
                </>
                <SortDropDown sort={(mode) => setMode(mode) } />
            </div>
            <CountrySideList setCountry={setCountry} query={query} sort={mode} country_stats={props.country_stats} />
        </>
    );
}

export default CountryListSection;