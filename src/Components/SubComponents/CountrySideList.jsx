import React from "react";
import { FixedSizeList as ListView } from "react-window";
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
    console.log(props);
    const country_list = sort(props.country_stats, props.sort);
    const toRender = country_list.filter(c => (c.name.toUpperCase().includes(props.query.toUpperCase()) || props.query === ''));
    
    const Row = ({index, style}) => {
        return(
            <CountrySideItem clickHandler={props.setCountry} style={style} data={toRender[index]} />
        );
    }

    return(
        <ListView
            className="searchCountryArea"
            height={685}
            itemCount={toRender.length}
            itemSize={60}
            overscanCount={6}
        >
            {Row}
        </ListView>
    )
}

export default CountrySideList;