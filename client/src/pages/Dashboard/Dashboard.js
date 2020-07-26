import React, {useEffect, useState} from 'react'
import {Header,Panel,Navbar, InfoModal,Footer} from "../../components/dashboard"
import {fetchUsers} from "../../api/api.js"
import "./Dashboard.css"

const Dashboard = ({profileinfo, setProfileInfo}) => {
    const [data,setData] = useState([])
    const [clientName,setClientName] = useState("")
    const [showInfoModal,setShowInfoModal] = useState(false)
    const [likes,setLikes] = useState(0);
    const [superlikes,setSuperLikes] = useState(0);
    const [loveToken,setLoveToken] = useState(10)
    const [superMatch,setSuperMatch] = useState(0)


    useEffect(()=>{
        fetchStorage();

        const getUsers=async()=>{
            setData(await fetchUsers())
           
    }

        getUsers()

     
    },[])

    const fetchStorage=()=>{
        let user = JSON.parse(localStorage.getItem("user"));
        console.log(user)
        setClientName(user.username)
    }
    return (
        <div>
            <Header/>
            <Navbar clientName={clientName}
                    showInfoModal={showInfoModal}
                    setShowInfoModal={setShowInfoModal}
                    />
            <InfoModal clientName={clientName} 
                       likes={likes} 
                       superlikes={superlikes}
                       showInfoModal={showInfoModal}/>

            <div className="panel_content_container">
            <Panel data={data}
                   likes={likes}
                   superlikes={superlikes}
                   setSuperLikes={setSuperLikes}
                   loveToken={loveToken}
                   setLikes={setLikes}
                   profileinfo={profileinfo}
                   setProfileInfo={setProfileInfo}
                   superMatch={superMatch}
                   loveToken={loveToken}
                   setLoveToken={setLoveToken}
                   setSuperMatch={setSuperMatch}/>
            </div>
            <Footer/>
        </div>
    )
}

export default Dashboard
