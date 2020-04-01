import React from "react";
import FooterMoreLinks from "./FooterMoreLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import ShareModal from "./ShareModal";
import NewsLink from "./NewsLink";

const FooterArea = (props) => {
    return(
        <div className="shareArea bar">
        <div className="bottomShareArea">
        <NewsLink news={props.news} />
        <ShareModal />
        <a href="https://ko-fi.com/R6R61HVEW" target="_blank" className="bottomShareAreaIcon latestNewsBtn coffeeDrop"><FontAwesomeIcon className="m-r-2" icon={faCoffee} /> Buy Me A Coffee</a>
        <FooterMoreLinks />
        <span id="installApp" className="bottomShareAreaIcon latestNewsBtn bottomMoreBtn"><FontAwesomeIcon className="m-r-2" icon={faMobileAlt} /> Install App
        </span>
        </div>
    </div>
    );
}

export default FooterArea;