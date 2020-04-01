import React, { useState } from 'react'
import Moment from 'react-moment';

export const NewsLink = (props) => {
    const [mode, setMode] = useState('backdropHide');
    let news = [];
    Object.keys(props.news).map((i) => news.push(props.news[i]));
    return (
        <>
            <div className={"backdrop latestNewsDropOpen " + mode}>
                <div className="backdropInnerMain latestNewsDropOpenInner">
                    <div className="backdropInner">
                        <span onClick={() => setMode('backdropHide')} className="backdropCloseIcon latestNewsDrop">✕</span>
                        <div className="backdropHeader live">Live Coronavirus News</div>
                        <div className="backdropContent">
                            <div className="pagesTexts">
                                <h4><span id="dateUpdated"></span></h4>
                                <ul id="newsList">
                                    {
                                        news.map((n, i) => <li key={i}><span className="newsTimeAgo"><Moment fromNow>{new Date((parseInt(n.time) * 1000))}</Moment></span> <span className="newsHeadline"><a href={n.href} rel="noopener noreferrer" target="_blank">{n.text} <span className="sourseBrk"></span></a></span></li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span onClick={() => setMode('backdropShow')} className="bottomShareAreaIcon latestNewsBtn latestNewsDrop liveNewsBTN"><span className="pulse" />Live News</span>
        </>
    );
}

export default NewsLink;
