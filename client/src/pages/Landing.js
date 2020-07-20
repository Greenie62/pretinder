import React, {useState} from 'react'
import {Header,Body} from "../components/landing"
import {FaHeart} from "react-icons/fa"
import party from "../assets/party.jpg"

const Landing = () => {
    const [isNew, setIsNew] = useState(false)

    return (
        <div className='landing_container'>
            <Header isNew={isNew} setIsNew={setIsNew}/>
     
            <Body isNew={isNew}/>
        </div>
    )
}

export default Landing
