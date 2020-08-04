import React, {useEffect,useState} from 'react'
import {Link} from "react-router-dom"

const Admin = () => {
    const [userData,setUsersData] = useState([])
    const [token,setToken] = useState("")
    const [toggleAlert,setToggleAlert] = useState("")

    useEffect(()=>{
        fetch('/auth/admin')
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            setUsersData(res.users)
        })
        getToken()
    },[])

    const getToken = () =>{
        let tokenRef= localStorage.token;
        tokenRef=token.split(" ")[1];
        setToken(tokenRef)
        console.log(token)
    }


    const deleteUser=(id)=>{
        fetch(`/auth/delete/${id}`,{
            method:"DELETE"
        })
        setToggleAlert(true);
        setTimeout(()=>{
            window.location.reload()
        },1000)
    }




    return (
        <div>
            <h1>Admin Page</h1>
            <Link to="/landing">Back to Landing</Link>
            <div className={toggleAlert ? 'show_adminalert' : "admin_alert"}>User removed!</div>
            <table>
                <thead>
                    <tr>
                        <th>Username:</th>
                        <th>Password:</th>
                        <th>Dob:</th>
                        <th>InterestedIn:</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.length ? userData.map((u,idx)=>(
                        <tr style={{outline:"1px solid black"}} key={idx} className="table-row">
                            <td>{u.username}</td>
                            <td>{u.password}</td>
                            <td>{u.dob}</td>
                            <td>{u.interestedIn}</td>
                            <td onClick={()=>deleteUser(u._id)}>x</td>
                        </tr>
                    )): null}
                </tbody>
            </table>
        </div>
    )
}

export default Admin
