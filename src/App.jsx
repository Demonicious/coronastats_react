import React, { Component } from "react";
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

class StatsApp extends Component {
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
        let res = await fetch(`https://api.jsonbin.io/b/5e8405812efc61772152cf38`, {
            headers: {
                'secret-key': '$2b$10$V5x.N0/phv3/FpejtIU60ed3OumyRHnwTT65zQJTRyyfPBUrxykI6'
            }
        });
        let data = await res.json();
        return data;
    }

    setSiteData(field, value) {
        let site_data = JSON.parse(localStorage.getItem('site_data'));
        site_data[field] = value;
        this.setState({
            site_data,
        });
        localStorage.setItem('site_data', JSON.stringify(site_data));
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

    async componentDidMount() {
        let site_data = localStorage.getItem('site_data');
        let theme = localStorage.getItem('theme');
        if(!site_data) {
            site_data = {
                views: 0,
                arrows_toast: false,
                coffee_toast: false,
                share_modal: false,
                prevention_guide: false,
            };
        } else site_data = JSON.parse(site_data);

        site_data.views += 1;

        let data = await this.getStats();
        
        if(data && data.latest) {
            this.setState({
                site_data,
                data,
                processed: true,
                theme: theme != null ? theme : 'dark',
            });
        } else {
            toast.error('There was an error obtaining the required data. Please check your Internet Connection & Reload the Page.');
        }

        localStorage.setItem('site_data', JSON.stringify(site_data));

        this.updateTheme.bind(this);
        this.updateTheme();
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
                            <CountryListSection time={this.state.data.latest.time} country_stats={this.state.data.latest.state.country_stats} affected_countries={this.state.data.latest.state.general.affected_countries} />
                            <FooterArea news={this.state.data.news} />
                        </div>
                    </div>
                    <div className="rightSection">
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
                    </div>
                    </div> : <></> }
            </>
        );
    }
}

export default StatsApp;