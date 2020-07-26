import React from 'react'
import {Link} from "react-router-dom"
import "./Profile.css"

const Profile = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Profile Page</h1>
            <Link to="/dashboard">Home</Link>
        </div>
    )
}

export default Profile
