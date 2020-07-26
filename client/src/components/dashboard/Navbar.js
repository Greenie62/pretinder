import React from 'react'

const Navbar = ({clientName,showInfoModal,setShowInfoModal}) => {
    return (
        <div className="navbar-row">
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
