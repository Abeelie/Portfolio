import React from "react";
import ScreenHeading from "../../utilities/SubHeading/ScreenHeading";
import ScrollService from "../../utilities/scrollservice";
import Animations from "../../utilities/animations";
import "./about.css";

const About = (props) => {
    const fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)
    
    const SCREEN_CONSTANTS = {
        description: `My name is Abraham Elie. I have a degree in business administration 
                      and have a desire to code. I like creating new projects`,
        highlights: {
            heading: "Here are my highlights",
            bullets: [
                "JavaScript Developer",
                "Full Stack Developer",
                "React/React Native Developer",
                "WordPress Developer",
                "Build Rest API",
                "Development with Databases"
            ],
        }
    }

    const renderData = SCREEN_CONSTANTS.highlights.bullets.map((d,index) => (
            <div className="highlights" key={index}>
                <div className="highlight-blob"></div>
                <span>{d}</span>
            </div>
        ))

    return(
        <div className="about-me-container" id={props.id || ""}>
            <div className="about-me-p">
                <ScreenHeading title={"About Me"} subHeading={"Why not Choose Me?"}/>
                <div className="about-me-card">
                    <div className="about-me-profile"></div>
                    <div className="about-me-details">
                        <span className="about-me-description">
                            {SCREEN_CONSTANTS.description}
                        </span>
                    <div className="about-me-highlights">
                        <div className="highlight-heading">
                            <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                        </div>
                        {renderData}
                    <div className="about-me-options">
                        <button className="btn primary-btn">
                            More
                        </button>
                        <a href="ehizcv.pdf" download="resume.pdf">
                            <button className="btn highlighted-btn">
                                Get Resume
                            </button>
                        </a>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About