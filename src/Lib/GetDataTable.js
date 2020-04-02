import React, { Fragment } from "react";
import { USComponent } from "./../Components/SubComponents/USComponent";
import { GenericComponent } from "../Components/SubComponents/GenericComponent";

const accordionDataTable = (data, json = true, c = 1, skipDeaths = false) => {
  let returnVal;
  if (json) data = JSON.parse(data);
  if(c === 1) {
    data.sort((c1, c2) => c2.all_cases - c1.all_cases);
  returnVal = <div id="depthData" className="depthData accordion">
    <div id="noteAlert" className="alert-info m-t-30">
      <strong>Note:</strong> State and Province wise statistics are updated at different times compared to National statistics, so they may take some time to catch-up. The day is reset after midnight GMT+0.
              </div>
    <div className="headD">
      <div className="innH loc">
        <div className="inF">
          Location
                  </div>
      </div>
      <div className="innH">
        <div className="inF">
          Infections
                  </div>
      </div>
      <div className="innH">
        <div className="inF">
          Deaths
                  </div>
      </div>
      <div className="innH">
        <div className="inF">
          Death Rate
                  </div>
      </div>
    </div>
    <div id="countryDataTable">
      {
        data.map((location, i) => <GenericComponent key={i} state={location} regions={location.locations} />)
      }
    </div>
  </div>;
  } else if(c === 2) {
    data = Object.keys(data).map(k => { return { name: k, all_cases: data[k]['all_cases'], regions: data[k]['regions'] }});
    data.sort((c1, c2) => c2.all_cases - c1.all_cases);
    returnVal = <div id="depthData" className="depthData accordion">
      <div id="noteAlert" className="alert-info m-t-30">
        <strong>Note:</strong> State and Province wise statistics are updated at different times compared to National statistics, so they may take some time to catch-up. The day is reset after midnight GMT+0.
              </div>
      <div className="headD">
        <div className="innH loc">
          <div className="inF">
            Location
                  </div>
        </div>
        <div className="innH">
          <div className="inF">
            Infections
                  </div>
        </div>
        <div className="innH">
          <div className="inF">
            Deaths
                  </div>
        </div>
        <div className="innH">
          <div className="inF">
            Death Rate
                  </div>
        </div>
      </div>
      <div id="countryDataTable">
        {
          data.map((location, i) => <GenericComponent key={i} state={location} regions={location.regions} />)
        }
      </div>
    </div>;
  } else if(c === 3) {
    let locations = data.states.sort((c1, c2) => c2.all_cases - c1.all_cases);
    returnVal = <div id="depthData" className="depthData accordion">
    <div id="noteAlert" className="alert-info m-t-30">
      <strong>Note:</strong> State and Province wise statistics are updated at different times compared to National statistics, so they may take some time to catch-up. The day is reset after midnight GMT+0.
              </div>
    <div className="headD">
      <div className="innH loc">
        <div className="inF">
          Location
                  </div>
      </div>
      <div className="innH">
        <div className="inF">
          Infections
                  </div>
      </div>
      <div className="innH">
        <div className="inF">
          Deaths
                  </div>
      </div>
      <div className="innH">
        <div className="inF">
          Death Rate
                  </div>
      </div>
    </div>
    <div id="countryDataTable">
      {
        locations.map((location, i) => <USComponent key={i} state={location} />)
      }
    </div>
  </div>;
  }

  return returnVal;
}

const nonAccordionDataTable = (data, json = true, skipDeaths = false) => {
  if(json) data = JSON.parse(data);
  data = data.sort((c1, c2) => c2.all_cases - c1.all_cases);
  let returnVal = <div id="depthData" className="depthData">
    <div id="noteAlert" className="alert-info m-t-30">
      <strong>Note:</strong> State and Province wise statistics are updated at different times compared to National statistics, so they may take some time to catch-up. The day is reset after midnight GMT+0.
              </div>
    <div className="headD">
      <div className="innH loc">
        <div className="inF">
          Location
                  </div>
      </div>
      <div className="innH">
        <div className="inF">
          Infections
                  </div>
      </div>
      <div className="innH">
        <div className="inF">
          Deaths
                  </div>
      </div>
      <div className="innH">
        <div className="inF">
          Death Rate
                  </div>
      </div>
    </div>
    <div id="countryDataTable">
      {
        data.map((location, i) => {
          return (
            <Fragment key={i}>
              <div className="dataD"><div className="innD loc">
                <div className="inD">
                  <div className="countryDetails"><span className="cName m-l-0">{location.name}</span></div>
                </div>
              </div>
                <div className="innD">
                  <div className="inD case">
                    {location.all_cases}
                  </div>
                </div>
                <div className="innD">
                  <div className="inD deaths">
                    {(!skipDeaths) ? location.all_deaths : ''}
                  </div>
                </div>
                <div className="innD">
                  <div className="inD rate">
                  </div>
                </div></div>
            </Fragment>
          );
        })
      }
    </div>
  </div>;

  return returnVal;
}

const getDataTable = ({country, countryDataTables}) => {
  let returnVal;
  switch(country.code.toLowerCase()) {
    case 'pk':
      returnVal = nonAccordionDataTable(countryDataTables.pk.json);
    break;
    case 'de':
      returnVal = nonAccordionDataTable(countryDataTables.de.json);
    break;
    case 'au':
      returnVal = nonAccordionDataTable(countryDataTables.au.json, true, true);
    break;
    case 'cn':
      returnVal = nonAccordionDataTable(countryDataTables.cn.json, true, true);
    break;
    case 'ca':
      returnVal = nonAccordionDataTable(JSON.parse(countryDataTables.us.json).canada.locations, false, true);
    break;
    case 'in':
      returnVal = accordionDataTable(countryDataTables.in.json);
    break;
    case 'it':
      returnVal = accordionDataTable(countryDataTables.it.json, true, 2);
    break;
    case 'gb':
      returnVal = accordionDataTable(countryDataTables.uk.json, true, 1);
    break;
    case 'us':
      returnVal = accordionDataTable(JSON.parse(countryDataTables.us.json).usa, false, 3, false);
    break;
    default:
      returnVal = null;
  }

  return returnVal;
}

export default getDataTable;