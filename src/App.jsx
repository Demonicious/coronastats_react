import React, { PureComponent } from "react";
import { ToastContainer, toast } from "react-toastify";
import AppLoader from "./Components/AppLoader";
import DataBlocks from "./Components/DataBlocks";
import StatsBlockPC from "./Components/StatsBlockPC";
import StatsBlockPhone from "./Components/StatsBlockPhone";
import CountryListSection from "./Components/CountryListSection";
import FooterArea from "./Components/FooterArea";
import { BottomRightShare } from "./Components/BottomRightShare";
import BottomLineChart from "./Components/BottomLineChart";
import TopRightPieChart from "./Components/TopRightPieChart";
import { WorldMap } from "./Components/WorldMap";

import LogoDarkMode from "./Assets/images/logo.png";
import LogoLightMode from "./Assets/images/logo_dark.png";

import './Assets/style/toasts.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faExternalLinkAlt, faLongArrowAltUp, faLongArrowAltDown } from "@fortawesome/free-solid-svg-icons";

class StatsApp extends PureComponent {
    constructor() {
        super();

        this.state = {
            site_data: {
                theme: 'dark',
            },
            data: null,
            processed: false,
        }
    }

    async getStats() {
        try {
            let res = await fetch(`https://public.coronastats.co/data.json?v=${Math.round(Math.random() * 1000000)}`);
            let data = await res.json();
            return data;
        } catch(e) {
            toast.error('There was an error retrieving the data. Please make sure your internet is connected & Reload the page.');
            console.error(e);
        }
    }

    toggleMode() {
        if(this.state.theme === 'light') {
            this.setState({
                theme: 'dark'
            });
        } else {
            this.setState({
                theme: 'light'
            });
        }
        return true;
    }

    toastFlow(views) {
        let new_update_toast = localStorage.getItem('new_update_toast') || false;
        let country_details_toast = localStorage.getItem('country_details_toast') || false;
        let coffee_toast = localStorage.getItem('coffee_toast') || false;
        let share_toast = localStorage.getItem('share_toast') || false;
        let stats_toast = localStorage.getItem('stats_toast') || false;

        if(!new_update_toast) {
            toast(<><strong>Hey there!</strong><br /><br />Many users were facing <strong>Performance Issues</strong> on this website, So I re-built the website from scratch to tackle them.<br /><br /><strong><a rel="noopener noreferrer nofollow" className="toastAnchor" target="_blank" href="https://coronastats.co/update"><FontAwesomeIcon icon={faExternalLinkAlt} /> See what changed</a></strong>.</>, {
                autoClose: 10000,
                closeOnClick: false,
            });
            localStorage.setItem('new_update_toast', 'true');
        } else if(!country_details_toast && views >= 2) {
            toast(<><strong>Hover / Touch</strong> a Country in the list to view general statistics.<br />Click the button on the left to view <strong>Detailed Statistics</strong> for a country.<br /><br />On PC, Click on a Country Bubble inside the Global Map to see general statistics.<br/><br/>You may toggle Data-sets in the Bar Charts by Clicking on their icon.</>, {
                autoClose: 10000
            });
            localStorage.setItem('country_details_toast', 'true');
        } else if(!stats_toast && views >= 3) {
            toast(<><FontAwesomeIcon icon={faLongArrowAltUp} className="green" /><FontAwesomeIcon icon={faLongArrowAltDown} className="green" /> &amp; <FontAwesomeIcon icon={faLongArrowAltUp} className="red" /><FontAwesomeIcon icon={faLongArrowAltDown} className="red" /> indicate the <strong>Increase / Decrease</strong> &amp; <strong>Betterment / Worsening</strong> of the situation related to a statistic between Today &amp; Yesterday. <br /><br /> Death Rate &amp; Recovery Rate is calculated based on <strong>Closed Cases</strong>.<br /><br />The start of a new day is <strong>GMT+0</strong>.</>, {
                autoClose: 6000,
                style: {
                    color: '#000'
                }
            });
            localStorage.setItem('stats_toast', 'true');
        } else if (!share_toast && views >= 4) {
            toast(<><strong>Found my website useful ?</strong><br /><br />Please use the <strong>Share</strong> button to share it with your Friends, Family or Co-workers to keep them updated!</>, {
                autoClose: 10000
            });
            localStorage.setItem('share_toast', 'true');
        } else if (!coffee_toast && views >= 5) {
            toast(<><strong>Like my website ?</strong><br /><br />If you found my website useful, Then I'd greatly appreciate It if you could buy me a coffee as It would support me &amp; help me out with server-costs too.<br /><br /><a href="https://ko-fi.com/R6R61HVEW" target="_blank" rel="noopener noreferrer nofollow" className="toastCoffee"><FontAwesomeIcon icon={faCoffee} /> Buy me a Coffee</a></>, {
                autoClose: 10000,
                closeOnClick: false,
            });
            localStorage.setItem('coffee_toast', 'true');
        }
    }

    async componentDidMount() {
        let views = localStorage.getItem('views') || 0;
        let theme = localStorage.getItem('theme') || 'dark';
        views = parseInt(views);
        views += 1;

        let data = await this.getStats();
        if(data && data.latest) {
            this.setState({
                views,
                data,
                processed: true,
                theme,
            });
        } else 
            toast.error('There was an error obtaining the required data. Please check your Internet Connection & Reload the Page.');

        this.updateTheme.bind(this);
        this.updateTheme();
        this.toastFlow(views);
        localStorage.setItem('views', views);
    }

    updateTheme() {
        if(this.state.theme === 'light') {
            localStorage.setItem('theme', 'light');
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        } else {
            localStorage.setItem('theme', 'dark');
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
        }
    }

    componentDidUpdate() {
        this.updateTheme.bind(this);
        this.updateTheme();
    }

    /* changeChartMode(mode) {
        this.setState({
            chart_mode: mode,
        });
    } */

    render() {
        return (
            <>
                <ToastContainer />
                <AppLoader display={(this.state.processed) ? false : true } />
                { this.state.data ? <div className="mainSection">
                    <div className="leftSection">
                        <div className="leftSectionLogoAreaMain">
                            <div className="mainhodler clearfix">
                                <div className="logo"><a href="https://coronastats.co"><span id="webLogo"><img alt='coronastats.co' src={this.state.theme === 'light' ? LogoLightMode : LogoDarkMode} className="img-responsivee" /></span></a></div>
                                <div className="thm-switch">
                                <div className="toggle toggle--daynight">
                                    <input onChange={() => { this.toggleMode.bind(this); this.toggleMode(); }} checked={ this.state.theme === 'light' ? true : false } type="checkbox" id="toggle--daynight" className="toggle--checkbox" />
                                    <label className="toggle--btn" htmlFor="toggle--daynight"><span className="toggle--feature" /></label>
                                </div>
                                </div>
                            </div>

                            <DataBlocks /* clickHandler={this.changeChartMode.bind(this)} chartMode={this.state.chart_mode} */ general={this.state.data.latest.state.general} />
                            <StatsBlockPhone comparison={this.state.data.comparison} general={this.state.data.latest.state.general} />
                        </div>
                        <div className="sidebarCountrySection">
                            <CountryListSection countryDataTables={
                                {
                                    us: this.state.data.us_data,
                                    pk: this.state.data.pk_data,
                                    uk: this.state.data.uk_data,
                                    es: this.state.data.spain_data,
                                    de: this.state.data.germany_data,
                                    in: this.state.data.india_data,
                                    au: this.state.data.australia_data,
                                    cn: this.state.data.china_data,
                                    it: this.state.data.italy_data,
                                }
                            } time={this.state.data.latest.time} country_stats={this.state.data.latest.state.country_stats} affected_countries={this.state.data.latest.state.general.affected_countries} />
                            <FooterArea news={this.state.data.news} />
                        </div>
                    </div>
                    {
                        window.innerWidth >= 993 ? <div className="rightSection">
                            <div className="rightInnerTop">
                                <WorldMap theme={this.state.theme} country_stats={this.state.data.latest.state.country_stats} /* mode={this.state.chart_mode} changeMode={(mode) => { this.changeChartMode.bind(this); this.changeChartMode(mode); } } */ />
                                <div className="rightInnerTopRight">
                                    <TopRightPieChart distribution={this.state.data.latest.state.distribution} />
                                    <StatsBlockPC comparison={this.state.data.comparison} general={this.state.data.latest.state.general} />
                                </div>
                            </div>
                            <div className="rightInnerBottom">
                                <BottomLineChart lines={this.state.data.lines} />
                                <BottomRightShare />
                            </div>
                        </div> : <></>
                    }
                    
                    </div> : <></> }
            </>
        );
    }
}

export default StatsApp;