import React, { useState } from "react";
import FooterMoreLinks from "./FooterMoreLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import ShareModal from "./ShareModal";
import NewsLink from "./NewsLink";
import { ContactForm } from "./SubComponents/ContactForm";
import { PreventionVideo } from "./SubComponents/PreventionVideo";

const InstallApp = () => {
    let t = {};
    document.addEventListener('beforeInstall', (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        t = e;
    });

    return [t, <span onClick={() => { if(t.prompt) t.prompt(); }} id="installApp" className="bottomShareAreaIcon latestNewsBtn bottomMoreBtn"><FontAwesomeIcon className="m-r-2" icon={faMobileAlt} /> Install App</span>];
}

const FooterArea = (props) => {
    let [t, InstallAppBtn] = InstallApp();
    const [showForm, setShowForm] = useState('invisible');
    const [showVideo, setShowVideo] = useState('invisible');

    const toggle = () => {
        showForm === 'invisible' ? setShowForm('is-visible') : setShowForm('invisible');
    }

    const toggleVideo = () => {
        showVideo === 'invisible' ? setShowVideo('is-visible') : setShowVideo('invisible');
    }

    return(
        <div className="shareArea bar">
        <div className="bottomShareArea">
        <NewsLink news={props.news} />
        <ShareModal />
        <a href="https://ko-fi.com/R6R61HVEW" target="_blank" rel="noopener noreferrer nofollow" className="bottomShareAreaIcon latestNewsBtn coffeeDrop"><FontAwesomeIcon className="m-r-2" icon={faCoffee} /> Buy Me A Coffee</a>
        <FooterMoreLinks toggleVideo={toggleVideo} toggle={toggle} />
        <ContactForm showForm={showForm} toggle={toggle} />
        <PreventionVideo showForm={showVideo} toggle={toggleVideo} />
        {
            t.prompt ? InstallAppBtn : <></>
        }
        </div>
    </div>
    );
}

export default FooterArea;