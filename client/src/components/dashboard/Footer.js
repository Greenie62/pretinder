import React from 'react'
import party from "../../assets/pubcrawl.jpg"
const Footer = () => {
    return (
        <div className="dashboard_footer">
            <div className="footer_overlay">
                <img src={party} className="footer_img" alt="img"/>
            </div>
            <p className="footer_p">Footer&copy;</p>
        </div>
    )
}

export default Footer
