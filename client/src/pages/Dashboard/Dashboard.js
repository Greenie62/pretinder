import React, {useEffect, useState} from 'react'
import {Header,Panel} from "../../components/dashboard"
import {fetchUsers} from "../../api/api.js"
import "./Dashboard.css"

const Dashboard = () => {
    const [data,setData] = useState([])


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
            <div className="panel_content_container">
            <Panel data={data}/>
            </div>
        </div>
    )
}

export default Dashboard
