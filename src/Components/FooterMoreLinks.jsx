import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion, faVideo, faProjectDiagram, faEnvelope, faPlus, faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faChrome } from "@fortawesome/free-brands-svg-icons";

function useOutsideAlerter(ref, setMode) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setMode('hide');
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, setMode]);
}

const FooterMoreLinks = () => {
    const [ mode, setMode ] = useState('hide');
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, setMode);

    return(
        <span ref={wrapperRef} onClick={e => mode === 'show' ? setMode('hide') : setMode('show')} className="bottomShareAreaIcon latestNewsBtn bottomMoreBtn" id="usefulLinksBtn"><FontAwesomeIcon icon={faPlus} /> More
            <div id="usefulLinks" className={'bottomPagesDropdown ' + mode}>
            <a href><FontAwesomeIcon icon={faQuestion} /> How to Protect Yourself</a>
            <a href><FontAwesomeIcon icon={faVideo} /> Coronavirus Explained</a>
            <a href><FontAwesomeIcon icon={faProjectDiagram} /> Data Sources</a>
            <a href><FontAwesomeIcon icon={faUserSecret} />Disclaimer &amp; Privacy Policy</a>
            <a href="https://twitter.com/coronastatsco" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faTwitter} /> Follow on Twitter</a>
            <a href><FontAwesomeIcon icon={faEnvelope} /> Drop me a Message</a>
            <a href="https://chrome.google.com/webstore/detail/live-coronavirus-tracker/ohgihjjamahlilnoifoicncfnlpmbcgk" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faChrome} /> Install Chrome Extension</a>
            </div>
        </span>
    );
}

export default FooterMoreLinks;