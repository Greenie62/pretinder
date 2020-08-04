import React from 'react'

const MatchProfile = ({profileinfo}) => {
    return (
    <div className='match_profile_card_parent'>
        <div className="match_profile_card">
            <div className='match_profile_img_div'>
                <img src={profileinfo.image} className="match_img" alt="img"/>
            </div>
            <div className="match_profile_info_div">
                <h5 className="match_h5">{profileinfo.name}</h5>
                <h5 className="match_h5">{profileinfo.email}</h5>
                <h5 className="match_h5">{profileinfo.age}</h5>
                <h5 className="match_h5">{profileinfo.address}</h5>
            </div>
            
        </div>
        {profileinfo.like_status === "superlike" ? 'Show messageboard of comments' : 'Nope, just the basic info you basic bitch!'}
    </div>
    )
}

export default MatchProfile
