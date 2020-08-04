import React, {useEffect, useState} from 'react'
import {Header,Panel,Navbar, InfoModal,Footer,AmoreCard,BuyLoveTokenModal} from "../../components/dashboard"
import {fetchUsers} from "../../api/api.js"
import "./Dashboard.css"

const Dashboard = ({profileinfo, setProfileInfo}) => {
    const [data,setData] = useState([])
    const [clientName,setClientName] = useState("")
    const [client,setClient] = useState({})
    const [showInfoModal,setShowInfoModal] = useState(false)
    const [likes,setLikes] = useState(0);
    const [superlikes,setSuperLikes] = useState(0);
    const [loveToken,setLoveToken] = useState(3)
    const [superMatch,setSuperMatch] = useState(0);
    const [showBuyModal,setShowBuyModal] = useState(false)

    const [toggleAmore,setToggleAmore] = useState(false)


    useEffect(()=>{
        let isCanceled=false;
            fetchStorageUsersAndClient();
   

if(!isCanceled){
    fetchStorageUsersAndClient();
}

         // attempted clean up function

       return ()=>{
            console.log("are you ever firing!")
            isCanceled = true;
        }
},[])


const getUsers=async(gender)=>{
    console.log(`GENDER:  ${gender}`)
    setData(await fetchUsers(gender))
   
}

    const fetchStorageUsersAndClient=()=>{
        //fetch user from LS, use data to make api request,
        // that fx populates usersdata array
        
        let user = JSON.parse(localStorage.getItem("user"));
        console.log(user)
        getUsers(user.searchGender)
        setClientName(user.username)
        fetchClient(user.username)
    }

    const fetchClient=clientname=>{
        console.log("Clientname: " + clientname);

        fetch(`http://localhost:3005/db/getuserinfo/${clientname}`)
        .then(dbuser=>dbuser.json())
        .then(dbuser=>{
            //setLoaded(true)
            console.log(dbuser)
            setLikes(dbuser[0].likes)
            setClient(dbuser[0])
            
        })
    }
    return (
        <div>
            <div className='dashboard_header_container'>
            <Header/>
            <AmoreCard toggleAmore={toggleAmore}/>
            </div>
            <Navbar clientName={clientName}
                    showInfoModal={showInfoModal}
                    setShowInfoModal={setShowInfoModal}
                    />
            <InfoModal clientName={clientName} 
                       likes={likes} 
                       superlikes={superlikes}
                       client={client}
                       setProfileInfo={setProfileInfo}
                       profileinfo={profileinfo}
                       showInfoModal={showInfoModal}/>

            <div className="panel_content_container">
                <BuyLoveTokenModal setShowBuyModal={setShowBuyModal} 
                                   showBuyModal={showBuyModal}
                                   superlikes={superlikes}
                                   setSuperLikes={setSuperLikes}/>
            <Panel data={data}
                    showBuyModal={showBuyModal}
                    setShowBuyModal={setShowBuyModal}
                   likes={likes}
                   superlikes={superlikes}
                   setSuperLikes={setSuperLikes}
                   loveToken={loveToken}
                   setLikes={setLikes}
                   clientName={clientName}
                   profileinfo={profileinfo}
                   setProfileInfo={setProfileInfo}
                   superMatch={superMatch}
                   loveToken={loveToken}
                   setLoveToken={setLoveToken}
                   toggleAmore={toggleAmore}
                   setToggleAmore={setToggleAmore}
                   setSuperMatch={setSuperMatch}/>
            </div>
            <Footer/>
        </div>
    )
}

export default Dashboard
