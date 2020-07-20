import React, {useState} from 'react'
import {FaHeart} from "react-icons/fa"
import ClientCard from "./ClientCard"
import ErrorCard from "./ErrorCard"
import party from "../../assets/party.jpg"


const Body = ({isNew}) => {
    const [error,setError] = useState("")





    const postUser=(user)=>{

        fetch(`/db/adduser`,{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            if(!res.isMember){
                window.location.pathname="/dashboard"
            }
            else{
                setError(res.msg)
            }
        })
    }
  

    return (
    <div>
         <div className='landing_body'>
                <div className="landing_body_overlay">
                    <img src={party} className="overlay_img" alt="img"/>
                </div>

           <div className="landing_body_content">
                <div className='landing_icon_div'> 
                    <FaHeart className="landing_icon"/>
                </div>
           </div>
           
        

        <ErrorCard error={error}/>
        <ClientCard isNew={isNew}
                    postUser={postUser}/>
        <div className="landing_body_footer">
            <p className="landing_footer_p">Footer&copy;👣</p>

        </div>
        </div>
     </div>
    )
}

export default Body
