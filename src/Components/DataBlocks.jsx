import React from "react";

const DataBlocks = (props) => {
    const { general } = props;
    return (
        <div className="sidebarStatsSection clearfix">
            <a /*onClick={() => clickHandler('all_cases')}*/ href className="sidebarStatsBlocksMain tabItem" /* + (chartMode === 'all_cases' ? 'active' : '')}*/>
                <div className="sidebarStatsBlocks">
                    <span id="infectionsNum">{ general.all_cases.toLocaleString() }</span><span className="title">Infections</span>
                </div>
            </a>
            <a /*onClick={() => clickHandler('all_deaths')}*/ href className="sidebarStatsBlocksMain tabItem" /* + (chartMode === 'all_deaths' ? 'active' : '')}*/>
                <div className="sidebarStatsBlocks">
                    <span id="deathsNum">{ general.all_deaths.toLocaleString() }</span><span className="title">Deaths</span>
                </div>
            </a>
            <a /*onClick={() => clickHandler('recoveries')}*/ href className="sidebarStatsBlocksMain tabItem" /* + (chartMode === 'recoveries' ? 'active' : '')}*/>
                <div className="sidebarStatsBlocks">
                    <span id="recoveriesNum">{ general.recoveries.toLocaleString() }</span><span className="title">Recoveries</span>
                </div>
            </a>
            <a /*onClick={() => clickHandler('critical')}*/ href className="sidebarStatsBlocksMain tabItem" /* + (chartMode === 'critical' ? 'active' : '')}*/>
                <div className="sidebarStatsBlocks">
                    <span id="criticalNum">{ general.critical.toLocaleString() }</span><span className="title">Critical</span>
                </div>
            </a>
        </div>
    );
}

export default DataBlocks;