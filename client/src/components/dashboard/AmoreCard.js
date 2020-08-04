import React from 'react'
import social from "../../assets/party.jpg"

const AmoreCard = ({toggleAmore}) => {
    return (
        <div className={toggleAmore ? "show_amore_container amore_container" : "amore_container"}>
        <div className='amore_overlay'>
            <img src={social} className="amore_img"></img>
        </div>
        
        <div className="amore_div">
<h1 className="amore_h1">Its AMORE! <i class='fas fa-heart' style={{color:'red'}}></i> </h1>  
<h4 className='ohhhh4'>ohhhhh</h4>          
        </div>


        </div>
    )
}

export default AmoreCard
