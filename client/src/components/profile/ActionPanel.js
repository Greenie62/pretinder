import React from 'react'

const ActionPanel = ({saveUser,showEmailCard, setShowEmailCard}) => {
    return (
        <div className='action_panel'>
           <h1 className='save_icon'>💘 </h1>
            <h3 onClick={saveUser} className="saveh3btn"> Save</h3>
            <h3 onClick={()=>setShowEmailCard(!showEmailCard)} className="emailh3btn"><a href="#">Email</a></h3>
            
        </div>
    )
}

export default ActionPanel
