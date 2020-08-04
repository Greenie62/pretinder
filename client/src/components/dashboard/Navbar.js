import React from 'react'
import {Link} from "react-router-dom"

const Navbar = ({clientName,showInfoModal,setShowInfoModal}) => {
    return (
        <div className="navbar-row">
            <Link className='logoutlink' to="/landing">⬅ </Link>
            <div className='navbar-flex'>
            <h4>❤️ {clientName}'s tinder 🔥  </h4>

          
            </div>
            <div onClick={()=>setShowInfoModal(!showInfoModal)} className='burger'>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    )
}

export default Navbar
