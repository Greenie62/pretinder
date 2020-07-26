import React from 'react'
import {Header, Footer, ProfileCard} from "../../components/profile"
import "./Profile.css"

const Profile = ({profileinfo}) => {
    console.log(profileinfo)
  

    return (
        <div>
          <Header/>
          <ProfileCard profileinfo={profileinfo}/>
          <Footer/>
        </div>
    )
}

export default Profile
