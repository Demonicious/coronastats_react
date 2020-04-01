import React from 'react'

import { Map, CircleMarker, TileLayer, Popup } from "react-leaflet";
import "./../Assets/style/maps.css";

export const WorldMap = (props) => {
    /* const [mode, setMode] = useState('all_cases');
    useEffect(() => {
        if(mode !== props.mode) props.changeMode(mode);
    }, [mode, setMode]); */
    const { country_stats } = props;
    let minLong = 999;
    let maxLong = 0;
    let minLat = 999;
    let maxLat = 0;

    let multiplier = 1.2;
    const markers = <>{ country_stats.map((c, i) => {
        if(c.lat_long) {
            c.lat_long.lat = parseFloat(c.lat_long.lat);
            c.lat_long.long = parseFloat(c.lat_long.long);
            if (c.lat_long.lat > maxLat) maxLat = c.lat_long.lat;
            else if (c.lat_long.lat < minLat) minLat = c.lat_long.lat;

            if (c.lat_long.long > maxLong) maxLong = c.lat_long.long;
            else if (c.lat_long.long < minLong) minLong = c.lat_long.long;

            return (
                <CircleMarker
                    key={i}
                    radius={multiplier * Math.log(c.all_cases)}
                    fillOpacity={0.5}
                    color={"#ac77f9"}
                    stroke={true}
                    fillColor={"#ac77f9"}
                    weight={1}
                    center={[c.lat_long.lat, c.lat_long.long]}
                >
                    <Popup>
                        <div class="popUpContent">
                            <div class="countryInfo">
                                <img width={30} height={30} src={c.flag} alt={c.name} />
                                <span>{c.name}</span>
                            </div>
                            <div class="countryStatsWrapper">
                                <div class="countryStats">
                                    <span class="infections">New Cases: </span> {c.new_cases > 0 ? '+' : ''}{c.new_cases.toLocaleString()}<br />
                                    <span class="deaths">New Deaths: </span> {c.new_deaths > 0 ? '+' : ''}{c.new_deaths.toLocaleString()}<br />
                                </div>

                                <div class="countryStats">
                                    <span class="infections">Infections: </span> {c.all_cases.toLocaleString()}<br />
                                    <span class="deaths">Deaths: </span> {c.all_deaths.toLocaleString()}<br />
                                    <span class="recoveries">Recoveries: </span> {c.recoveries.toLocaleString()}<br />
                                    <span class="critical">Critical: </span> {c.critical.toLocaleString()}<br />
                                </div>
                            </div>
                        </div>
                    </Popup>
                </CircleMarker>
            )
        }
    }) }</>

    let centerLat = (minLat + maxLat) / 2;
    let centerLong = (minLong + maxLong) / 2;

    return (
        <div className="MapChartArea">
                                <div className="mapChartTitleMain">
                <div className="mapChartTitle"><span className="blockTopTitle"><span id="worldWideCharts">Worldwide Infections</span>{/*<span className="prevention revealOpen"><i className="far fa-question-circle" /> How to Prevent?</span>*/}</span></div>
                                    {/*<div className="mapChartSorting">
                                        <a onClick={() => setMode('all_cases')} href className={'tabItem ' + (props.mode === 'all_cases' ? 'active' : '')}>Infections</a>
                                        <a onClick={() => setMode('all_deaths')} href className={'tabItem ' + (props.mode === 'all_deaths' ? 'active' : '')}>Deaths</a>
                                        <a onClick={() => setMode('recoveries')} href className={'tabItem ' + (props.mode === 'recoveries' ? 'active' : '')}>Recoveries</a>
                                        <a onClick={() => setMode('critical')} href className={'tabItem ' + (props.mode === 'critical' ? 'active' : '')}>Critical</a>
                                    </div>*/}
                                </div>
                                <div id="worldwideDistribution" className="MapChartMain">
                                    <Map
                                        style={{ height: "100%", width: "100%" }}
                                        zoom={2}
                                        center={[centerLat, centerLong]}
                                        bounds={[
                                            [minLat, minLong],
                                            [maxLat, maxLong]
                                        ]}
                                    >
                                        <TileLayer
                                        minZoom={2}
                                        maxZoom={20}
                                        attribution={props.theme !== 'light' ? '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors' : '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'}
                        url={props.theme !== 'light' ? "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" : 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'} />

                                        {
                                            markers
                                        }
                                    </Map>
                                </div>
                            </div>
    )
}
