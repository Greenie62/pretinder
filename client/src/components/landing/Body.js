import React, {useState} from 'react'
import {FaHeart} from "react-icons/fa"
import ClientCard from "./ClientCard"
import ErrorCard from "./ErrorCard"
import party from "../../assets/party.jpg"


const Body = (props) => {
    const [error,setError] = useState("")
    const [errorTwo,setErrorTwo] = useState("")





    const postUser=(user)=>{

        fetch(`/db/adduser`,{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            if(!res.isMember){
                setToStorage(res.dbuser)
                setError(`Welcome ${res.dbuser.username}!`);
                setErrorTwo("Redirecting you to the party!")
                setTimeout(()=>{
                    props.history.push("/dashboard")
                },1500);
            }
            else{
                setError(res.msg)
                setErrorTwo("Please use the login")
                setTimeout(()=>{
                    setError("")
                    setErrorTwo("")
                },2000)
            }
        })
    }

    const setToStorage=(user)=>{
        localStorage.setItem("user",JSON.stringify(user))
    }


    const postLogin=(user)=>{
        fetch("/db/login",{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res);

            if(res.response){

                if(res.token){
                    localStorage.token=res.token;
                    setTimeout(()=>{
                        props.history.push("/admin")
                    },1250)
                }
                else{
                setToStorage(res.dbuser)
                setError(`Welcome ${res.dbuser.username}!`);
                setErrorTwo("Redirecting you to the party!")
                setTimeout(()=>{
                    props.history.push("/dashboard")
                },2000)
            }
            }
            else{
                setError(res.message);
                console.log(res)
                setTimeout(()=>{
                    setError("")
                    setErrorTwo("")
                },2000)

            }
        })
    }
  

    return (
    <div>
         <div className='landing_body'>
            
                <div className="landing_body_overlay">
                    <img src={party} className="overlay_img" alt="img"/>
                </div>

           <div className="landing_body_content">
                <div className='landing_icon_div'> 
                    <FaHeart className="landing_icon"/>
                </div>
           </div>
           

       
        <ClientCard isNew={props.isNew}
                    error={error}
                    errorTwo={errorTwo}
                    postLogin={postLogin}
                    postUser={postUser}/>
        
        <div className="landing_body_footer">
            <p className="landing_footer_p">Footer&copy;👣</p>

        </div>
        </div>
     </div>
    )
}

export default Body
