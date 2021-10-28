import React from "react";
import Typical from "react-typical";
import "./profile.css";

const Profile = () => {

    const switchScreen = (screen) => {
        const screenComponent = document.getElementById(screen);
        if(!screenComponent) return;
        screenComponent.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <div className="profile-container">
            <div className="profile-cont">
                <div className="profile-detail">
                    <div className="profile-detail-name">
                        <span className="primary-text">
                            Welcome, my name is   
                            <span className="highlighted-text">
                                Abraham Elie
                            </span>
                        </span>
                    </div>
                    <div className="profile-detail-role">
                        <span className="primary-text">
                            <h1 className="typical">
                                <Typical 
                                    loop={Infinity}
                                    steps={[
                                        "Cheerful Developer 😀",
                                        1000,
                                        "Creative Oracle 🕵🏼",
                                        1000,
                                        "Full Stack Developer 🤯",
                                        1000,
                                        "React Professional 🤖",
                                        1000,
                                        "WordPress Warrior 😮",
                                        1000,
                                    ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                A strong desire for building unique and innovative web and mobile applications.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className="btn primary-btn" onClick={() => switchScreen("Contacts")}>
                            Hire Me
                        </button>
                        {/* <a href="AbrahamElie.pdf" download="resume.pdf">
                            <button className="btn highlighted-btn">
                                Get Resume
                            </button>
                        </a> */}
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-bg">
                                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile