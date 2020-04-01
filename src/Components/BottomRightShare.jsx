import React from 'react'

export const BottomRightShare = () => {
    return (
        <div className="rightBottomShare">
            <div className="share">
                <h2>Share with your friends, family or coworkers.</h2>
                <div className="subtt">Keep them up to date with the coronavirus outbreak.</div>
                <div className="rightShareArea">
                    <a rel="noopener noreferrer nofollow" target="_blank" className="bottomShareAreaIcon" href={"https://api.whatsapp.com/send?text=" + encodeURI('Stay Updated with Live Coronavirus Tracker and News: https://coronastats.co')}><img width={13} height={13} src="images/iconWhatsapp.png" /></a>
                    <a rel="noopener noreferrer nofollow" target="_blank" className="bottomShareAreaIcon" href="https://facebook.com/sharer.php?display=popup&u=https://coronastats.co"><img width={13} height={13} src="images/iconFacebook.png" /></a>
                    <a rel="noopener noreferrer nofollow" target="_blank" className="bottomShareAreaIcon" href="https://twitter.com/intent/tweet?text=Stay Updated with Live Coronavirus Tracker and News https://coronastats.co #Covid_19 #CoronavirusPandemic #coronastats #corona&url=https://coronastats.co"><img width={13} height={13} src="images/iconTwitter.png" /></a>
                    <a rel="noopener noreferrer nofollow" target="_blank" className="bottomShareAreaIcon" href="http://vk.com/share.php?url=https://coronastats.co"><img width={13} height={13} src="images/iconVk.png" /></a>
                </div>
            </div>
        </div>
    )
}
