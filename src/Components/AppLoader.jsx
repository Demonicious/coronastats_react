import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

import Logo from "./../Assets/images/logo.png";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const AppLoader = (props) => {
    if(props.display) {
        return (
            <div id="app_loader">
                <div id="app_loader_logo">
                    <img src={Logo} alt="coronastats.co" />
                </div>
                <div id="app_loader_icon">
                    Loading...  <FontAwesomeIcon icon={faCircleNotch} spin />
                </div>
                <div id="app_loader_footer">
                    <a target="_blank" href="https://twitter.com/coronastatsco" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /> Follow me on Twitter</a>
                </div>
            </div>
        )
    } else return <></>
}

export default AppLoader;