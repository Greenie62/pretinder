import React, {useEffect, useState} from "react"
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom"
import {Landing, Dashboard,Profile} from "./pages"

// import "./App.css"



const App = () =>{

    const [profileinfo,setProfileInfo] = useState({})


        useEffect(()=>{

            fetch('/test')
            .then(res=>res.json())
            .then(res=>{
                console.log(res)
            })
        },[])



        return(
            <Router>
                {window.location.pathname === "/" ? <Redirect to="/landing"/> : null}
                <Route exact path="/landing" render={(props)=><Landing {...props}/>}/>
                <Route path="/dashboard" render={()=><Dashboard profileinfo={profileinfo} setProfileInfo={setProfileInfo}/>}/>
                <Route path="/profile/" render={()=><Profile profileinfo={profileinfo}/>}/>
            </Router>
        )

}



export default App;