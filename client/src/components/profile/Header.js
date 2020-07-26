import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <div className="profile_header_parent">
             <div className="profile_header">
            <h2>Tinder Profile</h2>
            </div>
            <Link className="profile_header_link" to="/dashboard">Home</Link>
        </div>
    )
}

export default Header
