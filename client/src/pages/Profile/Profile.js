import React, { useEffect, useState } from 'react'
import {Header, Footer, ProfileCard} from "../../components/profile"
import "./Profile.css"

const Profile = ({profileinfo}) => {
  const [client,setClient] = useState(JSON.parse(localStorage.getItem("user")))
    console.log(profileinfo)
    console.log(client)


    // useEffect(()=>{
    //   setClient(JSON.parse(localStorage.getItem("user")))
    //   console.log(client)

    // },[])
  

    return (
        <div>
          <Header/>
          <ProfileCard clientusername={client.username} profileinfo={profileinfo}/>
          <Footer/>
        </div>
    )
}

export default Profile
