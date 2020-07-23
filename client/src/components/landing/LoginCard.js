import React, {useState} from 'react'

const LoginCard = ({isNew,postLogin}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const enterLogin=()=>{

        let user={username,password};

        console.log(user)
        postLogin(user)
}

console.log(isNew)
    return (
        
                      <div className={isNew ? "login_card" : "show_login_card"}>
                <h4 className="login_card_h3">Login</h4>
            <div className="login_form">
            
            <div className="form_div">
                <label htmlFor="username">Username:</label>
                    <input className="landinginput" type="text" name="username" id="username" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="username..." autoComplete="off" autoFocus/>
                    <br/>
                <small className='sub-text'>Choose a username</small>
            </div>
            <div className="form_div">
                <label htmlFor="password">Password:</label>
                    <input className="landinginput" type="text" name="password" id="password" value={password}  onChange={(e)=>setPassword(e.target.value)} placeholder="password..." autoComplete="off"/>
                    <br/>
                <small className='sub-text'>Choose a password</small>
            </div>
            <div className='form_div'>
                {username !== "" && password !== "" ? <button onClick={enterLogin} className="loginbtn">Login</button> : null }
            </div>


            </div>
            </div> 
    
    )
}

export default LoginCard
