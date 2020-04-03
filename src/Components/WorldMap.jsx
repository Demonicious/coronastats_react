import React from 'react'
import { latLngBounds, latLng } from "leaflet";
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
        const markers = <>{country_stats.filter(c => (c.lat_long ? true : false)).map((c, i) => {
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
                            <div className="popUpContent">
                                <div className="countryInfo">
                                    <img width={30} height={30} src={c.flag} alt={c.name} />
                                    <span>{c.name}</span>
                                </div>
                                <div className="countryStatsWrapper">
                                    <div className="countryStats">
                                        <span className="infections">New Cases: </span> {c.new_cases > 0 ? '+' : ''}{c.new_cases.toLocaleString()}<br />
                                        <span className="deaths">New Deaths: </span> {c.new_deaths > 0 ? '+' : ''}{c.new_deaths.toLocaleString()}<br />
                                    </div>

                                    <div className="countryStats">
                                        <span className="infections">Infections: </span> {c.all_cases.toLocaleString()}<br />
                                        <span className="deaths">Deaths: </span> {c.all_deaths.toLocaleString()}<br />
                                        <span className="recoveries">Recoveries: </span> {c.recoveries.toLocaleString()}<br />
                                        <span className="critical">Critical: </span> {c.critical.toLocaleString()}<br />
                                    </div>
                                </div>
                            </div>
                        </Popup>
                    </CircleMarker>
                )
        })}</>

        let centerLat = (minLat + maxLat) / 2;
        let centerLong = (minLong + maxLong) / 2;
        const corner1 = latLng(-85, -180);
        const corner2 = latLng(85, 180);
        const bounds = latLngBounds(corner1, corner2);

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
                        maxBounds={bounds}
                        maxBoundsViscosity={0}
                    >
                        <TileLayer
                            minZoom={2}
                            maxZoom={20}
                            attribution={props.theme !== 'light' ? '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>' /* '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors' */ : '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'}
                            url={props.theme !== 'light' ? /*'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'*/ "https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png" : 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'} />

                        {
                            markers
                        }
                    </Map>
                </div>
            </div>
        )
}
