import React, { PureComponent } from 'react';
import { toast } from "react-toastify";
import { Bar } from "react-chartjs-2";
import LineChartMaker from "./../../Lib/LineChartMaker";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import getDataTable from "./../../Lib/GetDataTable";

export class CountryDetailsBackdrop extends PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      chartData: null,
      dataTable: null,
    }
  }

  async getCountrySpecificLines(name) {
    name = name.toLowerCase().replace('.', '').replace(/\s+/g, '').trim();
    let res = await fetch(`https://public.coronastats.co/spain.json?v=${Math.round(Math.random() * 1000000)}`);
    let data = await res.json();
    return data;
  }

  async constructChart(name, setState) {
    this.getCountrySpecificLines(name).then(lines => {
      const [data, options] = LineChartMaker(lines);
      this.setState({ chartData: [data, options] });
    }).catch(e => {
      console.error(e);
      toast.error('There was an error obtaining the required data. Please check your Internet Connection & Reload the Page.');
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.country !== null && (prevProps.country === null || prevProps.country.name !== this.props.country.name)) {
      this.constructChart.bind(this);
      this.constructChart(this.props.country.name, this.setState);
      this.setState({dataTable:getDataTable(this.props)});
    }
  }

  render() {
    const { country, setCountryItem } = this.props;
    let received = false;
    if(country && typeof country !== 'undefined') received = true;
    let mild_rate = 0;
    let critical_rate = 0;

    if(received) {
      critical_rate = ((country.critical / country.active_cases) * 100).toFixed(2);
      mild_rate = (100 - critical_rate).toFixed(2);
    }

    return (
          <div className={"backdrop countryDropOpen " + (received ? 'backdropShow' : 'backdropHide')}>
    <div className="backdropInnerMain countryDropOpenInner">
      <div className="backdropInner">
        <span onClick={() => setCountryItem(null)} className="backdropCloseIcon countryDropClose">✕</span>
        <div className="backdropHeader">
          <div id="countryDataHeader">
            <div className="countryDetails"><span id="countryDataFlag"><img alt={(received) ? country.name : ''} width={30} height={30} src={received ? country.flag : ''} className="img-responsivee" /></span> <span id="countryDataName" className="cName">{received ? country.name : ''} <span className="milPOP">{received ? country.per1mpop.toLocaleString() : ''} / 1M <FontAwesomeIcon icon={faUsers} /></span></span></div>
            <span className="dailyS">
              <div className="searchCountryAreaItemSickNp dataSm">
                <span id="countryDataNewCases" className="newCases">+{received ? country.new_cases.toLocaleString() : ''} Cases</span>
                <span id="spanAnd" className="and">&amp;</span>
                <span id="countryDataNewDeaths" className="newDeaths">+{received ? country.new_deaths.toLocaleString() : ''} Deaths</span>
              </div>
            </span>
          </div>
        </div>
        <div className="backdropContent">
          <div id="countryData">
            <div className="pagesTexts">
              <div className="sidebarStatsSection clearfix">
                <a id="cases_tab" href className="sidebarStatsBlocksMain tabItem">
                  <div id="infectionsNumAlt" className="sidebarStatsBlocks statSwitchAlt" data-mode="all_cases">
                    <span id="cInfectionsNum">
                        <span>{received ? country.all_cases.toLocaleString() : ''}</span>
                    </span><span className="title">Infections</span>
                  </div>
                </a>
                <a id="deaths_tab" href className="sidebarStatsBlocksMain tabItem">
                  <div className="sidebarStatsBlocks statSwitchAlt" data-mode="all_deaths">
                    <span id="cDeathsNum">
                        <span>{received ? country.all_deaths.toLocaleString() : ''}</span>
                    </span><span className="title">Deaths</span>
                  </div>
                </a>
                <a id="recoveries_tab" href className="sidebarStatsBlocksMain tabItem">
                  <div className="sidebarStatsBlocks statSwitchAlt" data-mode="recoveries">
                    <span id="cRecoveriesNum">
                        <span>{received ? country.recoveries.toLocaleString() : ''}</span>
                      </span><span className="title">Recoveries</span>
                  </div>
                </a>
                <a id="critical_tab" href className="sidebarStatsBlocksMain tabItem">
                  <div className="sidebarStatsBlocks statSwitchAlt" data-mode="critical">
                    <span id="cCriticalNum">
                        <span>{received ? country.critical.toLocaleString() : ''}</span>
                    </span><span className="title">Critical</span>
                  </div>
                </a>
              </div>
              <div id="virusStatsBlock" className="virusStatsBlock m-b-3 m-t-5">
                <div className="virusStatsBlockItem">
                  <div className="virusStatsBlockItemInner">
                    <span className="title survivalRate">Mild Cases</span>
                      <span id="activeRateCountry" className="data">{received ? mild_rate : 0}%</span>
                  </div>
                </div>
                <div className="virusStatsBlockItem">
                  <div className="virusStatsBlockItemInner">
                    <span className="title criticalRate">Critical Cases</span>
                          <span id="criticalRateCountry" className="data">{received ? critical_rate : 0}%</span>
                  </div>
                </div>
              </div>
              <div id="countryDataChart">
                <div id="countryDataChartDraw">
                  {
                          this.state.chartData ?
                          <div style={{width: '100%', height: '100%'}} id="countryDataChart">
                            <Bar data={this.state.chartData[0]} options={this.state.chartData[1]} />
                          </div>
                          : 
                          <div className="chartLoader">
                            <span id="countryDataChartLoaderSpan">
                              <FontAwesomeIcon icon={faCircleNotch} spin />
                            </span>
                          </div>
                  }
                </div>
              </div>
              {
                (received && this.state.dataTable) ? this.state.dataTable : <></>
              }
              {/*<div id="depthData" className="depthData">
                <div id="noteAlert" className="alert-info m-t-30 d-none">
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
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

      );
  }
}
