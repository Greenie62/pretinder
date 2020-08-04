import React, {useEffect, useState} from "react"
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom"
import {Landing, Dashboard,Profile, Admin} from "./pages"

 import "./App.css"



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
            <div className='main_app'>
            <Router>
                {window.location.pathname === "/" ? <Redirect to="/landing"/> : null}
                <Route exact path="/landing" render={(props)=><Landing {...props}/>}/>
                <Route path="/dashboard" render={()=><Dashboard profileinfo={profileinfo} setProfileInfo={setProfileInfo}/>}/>
                <Route path="/profile/" render={()=><Profile profileinfo={profileinfo}/>}/>
                <Route exact path="/admin" component={Admin}/>
            </Router>
            </div>
        )

}



export default App;