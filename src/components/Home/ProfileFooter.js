import React from "react";
import "./profilefooter.css";
import footerImg from "../../assets/ProfileImagesAndVideo/shape-bg.png";

const ProfileFooter = () => {
    return (
        <div className="pf-container">
            <div className="pf-container-p">
                <img src={footerImg} alt="footerImg"/>
            </div>
        </div>
    )
}

export default ProfileFooter