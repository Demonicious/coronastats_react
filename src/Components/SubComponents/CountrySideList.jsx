import React from "react";
import CountrySideItem from "./CountrySideItem";

const sort = (country_list, mode) => {
    switch(mode) {
        case 'new_deaths':
            country_list.sort((c1, c2) => {
                return c2.new_deaths - c1.new_deaths;
            });
        break;
        case 'all_cases':
            country_list.sort((c1, c2) => {
                return c2.all_cases - c1.all_cases;
            });
        break;
        case 'all_deaths':
            country_list.sort((c1, c2) => {
                return c2.all_deaths - c1.all_deaths;
            });
        break;
        case 'recoveries':
            country_list.sort((c1, c2) => {
                return c2.recoveries - c1.recoveries;
            });
        break;
        case 'critical':
            country_list.sort((c1, c2) => {
                return c2.critical - c1.critical;
            });
        break;
        case 'alphabetical':
            country_list.sort((c1, c2) => {
                if(c1.name < c2.name) { return -1; }
                if(c1.name > c2.name) { return 1; }
                return 0;
            });
        break;
        case 'new_cases':
        default:
        country_list.sort((c1, c2) => {
            return c2.new_cases - c1.new_cases;
        });
    }

    return country_list;
}

const CountrySideList = (props) => {
    const country_list = sort(props.country_stats, props.sort);
    return(
        <div id="countryStatsArea" className="searchCountryArea">
            {
                country_list.map((c, i) => {
                    if(c.name.toLowerCase().includes(props.query.toLowerCase()) || props.query === '')
                    return <CountrySideItem clickHandler={props.setCountry} key={i} data={c} />
                })
            }
        </div>
    )
}

export default CountrySideList;