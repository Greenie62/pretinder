import React from 'react'

const LoginCard = ({isNew}) => {
    return (
        
                      <div className={isNew ? "login_card" : "show_login_card"}>
                <h3 className="login_card_h3">Login Card</h3>
            <div className="login_form">
            
            <div className="form_div">
                <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" placeholder="username..." autoComplete="off" autoFocus/>
                    <br/>
                <small className='sub-text'>Choose a username</small>
            </div>
            <div className="form_div">
                <label htmlFor="password">Password:</label>
                    <input type="text" name="password" id="password" placeholder="password..." autoComplete="off"/>
                    <br/>
                <small className='sub-text'>Choose a password</small>
            </div>


            </div>
            </div> 
    
    )
}

export default LoginCard
