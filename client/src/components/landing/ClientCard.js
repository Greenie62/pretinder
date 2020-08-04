import React from 'react'
import SignUpCard from "./SignUpCard"
import LoginCard from "./LoginCard"
import ErrorCard from "./ErrorCard"

const ClientCard = ({isNew,error,errorTwo,postUser,postLogin}) => {



    return (
        <div className="long_register_card">
            <ErrorCard error={error} errortwo={errorTwo}/>
            <div className='input_card'>
 <LoginCard isNew={isNew}
            postLogin={postLogin}/>
            
<SignUpCard isNew={isNew}
            postUser={postUser}/>

            </div>
        
        </div>
    )
}

export default ClientCard
