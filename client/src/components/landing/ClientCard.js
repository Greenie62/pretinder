import React, {useState} from 'react'
import SignUpCard from "./SignUpCard"
import LoginCard from "./LoginCard"

const ClientCard = ({isNew,postUser}) => {



    return (
        <div className={isNew ? "register_card long_register_card" : "register_card"}>

            <div className='input_card'>
 <LoginCard isNew={isNew}/>
            
<SignUpCard isNew={isNew}
            postUser={postUser}/>

            </div>
        
        </div>
    )
}

export default ClientCard
