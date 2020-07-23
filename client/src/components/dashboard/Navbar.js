import React from 'react'

const Navbar = ({likes,superMatch}) => {
    return (
        <div className="navbar-row">
            <div className='navbar-flex'>
            <h4>❤️ SuperMatch:{superMatch  === 0 ? ' 🤔 ' : superMatch}</h4>

            <h5>Likes:{likes  === 0 ? ' 😬 ' : likes}</h5>
            </div>
            <div className='burger'>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    )
}

export default Navbar
