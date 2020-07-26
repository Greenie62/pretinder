import React from 'react'

const ProfileCard = ({profileinfo}) => {
    console.log(profileinfo)
    if(profileinfo.picture){
    return (
        <div className="profile_card">
            <div className="profile_row">
                <div className="profile_img_div">
                    <img src={profileinfo.picture.large} alt="profile_img" className="profile_img"/>
                </div>
                <div className="profile_info_div">
                    <h4>Name:{profileinfo.name.first} {profileinfo.name.last}</h4>
                    <h4>Gender{profileinfo.gender}</h4>
                    <h4>Age{profileinfo.dob.age}</h4>
                    <h4>Email:<a href="#">{profileinfo.email}</a></h4>
                    <h4>Location:{profileinfo.location.street.number} {profileinfo.location.street.name}</h4>
                    <h4>Been a member for:{profileinfo.registered.age} years</h4>
        \
                </div>
            </div>
            
        </div>
    )
    }
    else{
        return "Error 403: No profile info! :( "
    }
}

export default ProfileCard
