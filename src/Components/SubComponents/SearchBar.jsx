import React, {useState, useEffect} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const SearchBar = (props) => {
    const [ query, setQuery ] = useState('');

    useEffect(() => {
        props.search(query);
      }, [query, props]);

    return(
        <>
        <input onChange={(e) => setQuery(e.target.value)} value={query} id="searchText" autoFocus={true} autoComplete="search-affected-countries" type="text" name="Search" placeholder={`Search ${props.affected_countries} Regions`} className="searchCountryInput" />
        {
            query !== '' ? <FontAwesomeIcon icon={faTimesCircle} className="clearSearch" onClick={(e) => setQuery('')} /> : <></>
        }
        </>
    )
}

export default SearchBar;