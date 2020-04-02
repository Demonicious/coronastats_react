import React from "react";

import Moment from "react-moment";

const UpdateInfo = (props) => {
    let time = parseInt(props.time) * 1000;
    return(
        <>
            <div className="sidebarSearchUpdatedTxt" id="lastUpdatedHeader">Updated <Moment fromNow>{new Date(time)}</Moment></div>
            <div className="sidebarSearchUpdatedTxt sidebarSearchUpdatedTxt2" id="lastUpdatedHeader">
                <span style={{marginLeft: '6px'}}>Affected Countries</span>
                <span style={{float: 'right', marginRight: '12px'}}>Today's Stats</span>
            </div>
        </>
    )
}

export default UpdateInfo;