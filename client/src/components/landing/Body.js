import React from 'react'
import {FaHeart} from "react-icons/fa"
import party from "../../assets/party.jpg"


const Body = () => {
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
           
        </div>
        <div className="landing_body_footer">
            <p className="landing_footer_p">Footer&copy;👣</p>
        </div>
     </div>
    )
}

export default Body
