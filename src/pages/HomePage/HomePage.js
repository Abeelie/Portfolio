import React from "react";
import "./homepage.css";
import Header from "../../components/Home/Header";
import Profile from "../../components/Home/Profile";
import ProfileFooter from "../../components/Home/ProfileFooter";

const Hompage = () => {
    return (
        <div className="homepage-container">
            <Header />
            <Profile />
            <ProfileFooter />
        </div>
    )
}

export default Hompage