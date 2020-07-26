import React, {useState} from 'react'
import {measureLength, measureAlphaNum} from "../../utils/validate"
import PWErrorCard from "./PWErrorCard"

const SignUpCard = ({isNew,postUser}) => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [interestedIn,setInterestedIn] = useState("")
    const [dob,setDOB] = useState("")
    const [month,setMonth] = useState("")
    const [day,setDay] = useState("")
    const [searchGender,setSearchGender] = useState("")
    const [year,setYear] = useState("")
    const [errors,setErrors] = useState([])


    //populate selectinputs

    let months=['January','February','March','April','May','June','July','August','September','October','November','December']
    var days=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    let years=[];
    for(let i=1950;i<2015;i++){
        years.push(i)
    }


    const enterSignUp=()=>{

        let user={
            username,password,interestedIn,searchGender,dob:`${formatMonth(month)} ${day} ${year}`
        }
        console.log(formatMonth(month),day,year)
        console.log(user)
        postUser(user)
    }



    const formatMonth=(month)=>{
        if(month.length > 4){
            let temp=month.split("").splice(0,3)
             return temp.join("")

        }
        else{
            return month
        }
    }


    const validatePassword=password=>{
        console.log("validatePassword: " + password)
        getErrors(password)

    }

    const getErrors=password=>{
        let errors_temp=[];
        errors_temp.push(measureLength(password));
        errors_temp.push(measureAlphaNum(password))
        errors_temp=errors_temp.filter(e=>e !== undefined)

        setErrors(errors_temp)
        console.log(errors)
    }







    return (
        <div className={isNew ? "show_signup_card" : "signup_card"}>
            {/* {errors.length ? errors.map((e,idx)=>(
                <div key={idx}> {e.error} </div>
            )) : 'no errors'} */}
            <PWErrorCard errors={errors} password={password}/>
                <h3 className='signup_h3'>Sign Up </h3>
                <div className="signup_form">
                <div className="form_div">
                <label htmlFor="username">Username:</label>
                    <input className="landinginput" type="text" name="username" id="username" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="username..." autoComplete="off" autoFocus/>
                    <br/>
                <small className='sub-text'>Choose a username</small>
            </div>
            <div className="form_div">
                <label htmlFor="password">Password:</label>
                    <input className="landinginput" type="text" name="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value); validatePassword(e.target.value)}} placeholder="password..." autoComplete="off"/>
                    <br/>
                <small className='sub-text'>Choose a password</small>
            </div>
            <div className="form_div">
            <label htmlFor="interested">Interested in:</label>

                <div className="dob_form_div">
                <div className="dob_input_div">
                
                    <select className="dob_input landinginput"
                            name="interestedin" 
                            id="interestedin" 
                            value={interestedIn} 
                            onChange={(e)=>setInterestedIn(e.target.value)} 
                            placeholder="interested_in...">
                            <option value="casual">Casual</option>
                            <option value="serious">Serious</option>
                            <option value="naughty">Naughty</option>
                    </select>
                </div>
                <div className="dob_input_div">
                
                <select className="dob_input landinginput"
                        name="searchGender" 
                        id="searchgender" 
                        value={searchGender} 
                        onChange={(e)=>setSearchGender(e.target.value)} 
                        placeholder="search_gender..." 
                        autoComplete="off">
                    <option value="male">Guys</option>
                    <option value="female">Girls</option>
                    <option value="both">Both</option>
                </select>
            </div>
                    <br/>
                </div>
                <small className='sub-text-caption'>Looking for a friend or...😈</small>

            </div>

        <div className='form_div'>
            <label htmlFor="dob">DOB:</label>
            <div className="dob_form_div">
               
                <div className="dob_input_div">
                    <select className="dob_input landinginput" value={month} onChange={(e)=>setMonth(e.target.value)} type="text" name="month" id="month" placeholder="month..." autoComplete="off">
                        {months.map(m=>(
                            <option key={m} value={m}>{m}</option>
                        ))}
                        </select>
                </div>
                <div className="dob_input_div">
                <select className="dob_input landinginput" value={day} onChange={(e)=>setDay(e.target.value)} type="text" name="day" id="day" placeholder="day..." autoComplete="off">
                        {days.map((m,idx)=>(
                            <option key={idx+1} value={idx+1}>{idx+1}</option>
                        ))}
                        </select>                </div>
                <div className="dob_input_div">
                <select className="dob_input landinginput" value={year} onChange={(e)=>setYear(e.target.value)} type="text" name="year" id="year" placeholder="year..." autoComplete="off">
                        {years.map(m=>(
                            <option key={m} value={m}>{m}</option>
                        ))}
                        </select>                </div>
                    <br/>

            </div>
            <small className="dob_sub_text">Your Date of birth...</small>

                </div>
            
                {!errors.length  && password !== "" ? <button className="sign_up_btn" onClick={enterSignUp}>Sign Up</button>
                                                    : <small>Please fill out all inputs! :)</small>
                }

            </div>

            </div>
    )
}

export default SignUpCard
