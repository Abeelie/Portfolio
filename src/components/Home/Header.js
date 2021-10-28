import React, { useState } from "react";
import "./header.css";
import { TOTAL_SCREENS, GET_SCREEN_INDEX } from "../../utilities/commonUtils";
import ScrollService from "../../utilities/scrollservice";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Header = () => {
    const [selectedScreen, setSelectedScreen] = useState(0);
    const [showHeaderOptions, setShowHeaderOptions] = useState(false);

    const updateScreen = (currentScreen) => {
        if (!currentScreen || !currentScreen.screenInView) return; 
        const screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
        if(screenIndex < 0) return;
    }

    const currentScreenSubscription = ScrollService.currentScreenBroadCaster.subscribe(updateScreen);

    const getHeaderOptionsClass = (index) => {
        let classes = "header-option ";
        if(index < TOTAL_SCREENS.length - 1) classes += "header-option-seperator ";
        if(selectedScreen === index) classes += "selected-header-option";
        return classes;
    }

    const switchScreen = (index, screen) => {
        const screenComponent = document.getElementById(screen.screen_name);
        if(!screenComponent) return;
        screenComponent.scrollIntoView({behavior: 'smooth'});
        setSelectedScreen(index);
        setShowHeaderOptions(false);
    }

    const getHeaderOptions = TOTAL_SCREENS.map((screen, index) => (
        <div key={screen.screen_name} 
             className={getHeaderOptionsClass(index)} 
             onClick={() => switchScreen(index, screen)}>
            <span>{screen.screen_name}</span>
        </div>
     ))

    return (
        <div>
            <div className="header-container" onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
                <div className="header-p">
                    <div className="header-hamburger" onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
                        <FontAwesomeIcon className="header-hamburger-bars" icon={faBars}/>
                    </div>
                    <div className="header-logo">
                        <span>
                            Abraham Elie
                        </span>
                    </div>
                    <div className={showHeaderOptions ? "header-options show-hamburger-options" : "header-options"}>
                        {getHeaderOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header