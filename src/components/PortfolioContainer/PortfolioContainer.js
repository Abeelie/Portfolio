import React from "react";
import { TOTAL_SCREENS } from "../../utilities/commonUtils";
import Footer from "../../components/Footer/Footer";

const PortfolioContainer = () => {
    const showScreen = TOTAL_SCREENS.map(screen => (
                        screen.component ? 
                        <screen.component 
                            screenName={screen.screen_name}
                            key={screen.screen_name}
                            id={screen.screen_name} 
                        /> 
                    : 
                        <div key={screen.screen_name}></div>
                    ))

    return(
        <div className="Portfolio-Container">
            {showScreen}
            <Footer />
        </div>
    )
}

export default PortfolioContainer