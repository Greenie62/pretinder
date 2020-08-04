import React, {useState} from 'react'
import ActionPanel from "./ActionPanel"
import EmailModal from "./EmailModal"
import MatchProfile from "./MatchProfile"

const ProfileCard = ({clientusername,profileinfo}) => {
    const [showEmailCard, setShowEmailCard] = useState(false)


    const saveUser=()=>{


        console.log(clientusername)

        let user={
           clientname:clientusername,
            name:profileinfo.name.first + " " + profileinfo.name.last[0],
            email:profileinfo.email,
            gender:profileinfo.gender,
            age:profileinfo.dob.age,
            address:profileinfo.location.street.number + " " + profileinfo.location.street.name,
            image:profileinfo.picture.large
        }

        console.log(user)

        fetch(`db/savematch/${profileinfo.like_status}`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            
        })
    }



    console.log(profileinfo)
    
    if(profileinfo.picture){
    return (
        <div className="profile_card">
            <div className="profile_row">
                <div className="profile_img_div">
                    <img src={profileinfo.picture.large} alt="profile_img" className="profile_img"/>
                </div>

                <ActionPanel saveUser={saveUser} showEmailCard={showEmailCard} setShowEmailCard={setShowEmailCard}/>
            </div>

            <div className="profile_info_div">
                    <h4>Name:{profileinfo.name.first} {profileinfo.name.last}</h4>
                    <h4>Gender{profileinfo.gender}</h4>
                    <h4>Age{profileinfo.dob.age}</h4>
                    <h4>Email:<a href="#">{profileinfo.email}</a></h4>
                    <h4>Location:{profileinfo.location.street.number} {profileinfo.location.street.name}</h4>
                    <h4>Been a member for:{profileinfo.registered.age} years</h4>
        
                </div>
                <EmailModal client={clientusername} showEmailCard={showEmailCard} email={profileinfo.email}/>
            
        </div>
    )
    }

    if(profileinfo.image){
        return(
        <MatchProfile profileinfo={profileinfo}/>
        )
    }
    
    else{
        return "Error 403: No profile info! :( "
    }
}

export default ProfileCard
