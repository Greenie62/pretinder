import React from 'react'
import pubcrawl from "../../assets/pubcrawl.jpg"

const Header = () => {
    return (
        <div className="dashboard_header_parent">
        <div className="dashboard_header_overlay">
            <img src={pubcrawl} className="header_overlay_img" alt="img"/>
        </div>
       
        <div className="dashboard_header_content">
            <h2 className="dashboard_h1">
                Falling in Love...
            </h2>
            <div className='neoncard'>
                <h2 className="neon_h2">Or Fun 😜 </h2>
            </div>
        </div>

        </div>
    )
}

export default Header
