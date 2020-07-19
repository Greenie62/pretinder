import React, {useEffect} from "react"
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom"
import {Landing, Dashboard} from "./pages"

import "./App.css"



const App = () =>{


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
                <Route exact path="/landing" component={Landing}/>
                <Route path="/dashboard" component={Dashboard}/>
            </Router>
        )

}



export default App;