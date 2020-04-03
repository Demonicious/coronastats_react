import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faVk, faReddit, faFacebookMessenger, faWhatsapp, faLinkedin, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { CopyLink } from './SubComponents/CopyLink';

export const ShareModal = () => {
    const [mode, setMode] = useState('hide');
    return (
        <>
            {
                mode === 'show' ?
            <div id="shareModalMain" className={"share-modelMain " + mode}>
                <div onClick={() => setMode('hide')} id="shareClose" className="shareDropBtn"><span aria-hidden="true">&times;</span></div>
                <div className="contentHoder">
                    <h2>Create Awareness, <span>Save Lives</span>, Share Now</h2>
                    <h4>Help us spread awareness, every single share counts &amp; may save a life.</h4>
                    <div className="shareBTNs">
                        <a target="_blank" rel="noopener noreferrer nofollow" href="https://facebook.com/sharer.php?display=popup&u=https://coronastats.co" className="sBtn fb"><FontAwesomeIcon className="m-r-2" icon={faFacebookF} /> Facebook</a>
                        <a target="_blank" rel="noopener noreferrer nofollow" href="https://twitter.com/intent/tweet?text=Stay Updated with Live Coronavirus Tracker and News https://coronastats.co #Covid_19 #CoronavirusPandemic #coronastats #corona&url=https://coronastats.co" className="sBtn tw"><FontAwesomeIcon className="m-r-2" icon={faTwitter} /> Twitter</a>
                        <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.linkedin.com/shareArticle?mini=true&url=https://coronastats.co&title=coronastats.co&summary=Live%20Coronavirus%20Tracker%20Tracker%20with%20Quick%20Updates%20&%20News&source=https://coronastats.co" className="sBtn li"><FontAwesomeIcon className="m-r-2" icon={faLinkedin} /> Linkedin</a>
                        <a target="_blank" rel="noopener noreferrer nofollow" href={"https://api.whatsapp.com/send?text=" + encodeURI('Stay Updated with Live Coronavirus Tracker and News: https://coronastats.co')} className="sBtn wh"><FontAwesomeIcon className="m-r-2" icon={faWhatsapp} /> WhatsApp</a>
                        <a target="_blank" rel="noopener noreferrer nofollow" href="fb-messenger://share/?link=https://coronastats.co&app_id=974024566324865" className="sBtn me"><FontAwesomeIcon className="m-r-2" icon={faFacebookMessenger} /> Messenger</a>
                        <a target="_blank" rel="noopener noreferrer nofollow" href={"https://www.reddit.com/submit?title=Live%20Coronavirus%20Tracker%20Tracker%20with%20Quick%20Updates%20&%20News&url=https://coronastats.co?v=" + Math.round(Math.random() * 1000000)} className="sBtn re"><FontAwesomeIcon className="m-r-2" icon={faReddit} /> Reddit</a>
                        <a target="_blank" rel="noopener noreferrer nofollow" href="http://vk.com/share.php?url=https://coronastats.co" className="sBtn vk"><FontAwesomeIcon className="m-r-2" icon={faVk} /> VK</a>
                        <CopyLink />
                    </div>
                </div>
            </div> : <></>
            }
            <span onClick={() => setMode('show')} className="bottomShareAreaIcon latestNewsBtn liveNewsBTN other shareDropBtn" id="shareDropBtn"><FontAwesomeIcon className="m-r-2" icon={faShareAlt} /> Share</span>
        </>
    )
}

export default ShareModal;