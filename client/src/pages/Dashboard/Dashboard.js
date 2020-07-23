import React, {useEffect, useState} from 'react'
import {Header,Panel,Navbar} from "../../components/dashboard"
import {fetchUsers} from "../../api/api.js"
import "./Dashboard.css"

const Dashboard = () => {
    const [data,setData] = useState([])
    const [likes,setLikes] = useState(0);
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
    }
    return (
        <div>
            <Header/>
            <Navbar likes={likes}
                    superMatch={superMatch}/>
            <div className="panel_content_container">
            <Panel data={data}
                   likes={likes}
                   loveToken={loveToken}
                   setLikes={setLikes}
                   superMatch={superMatch}
                   setSuperMatch={setSuperMatch}/>
            </div>
        </div>
    )
}

export default Dashboard
