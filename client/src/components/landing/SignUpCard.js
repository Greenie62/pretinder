import React, {useState} from 'react'

const SignUpCard = ({isNew,postUser}) => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [interestedIn,setInterestedIn] = useState("")
    const [dob,setDOB] = useState("")
    const [month,setMonth] = useState("")
    const [day,setDay] = useState("")
    const [year,setYear] = useState("")


    //populate selectinputs

    let months=['January','February','March','April','May','June','July','August','September','October','November','December']
    var days=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    let years=[];
    for(let i=1950;i<2015;i++){
        years.push(i)
    }


    const enterSignUp=()=>{

        let user={
            username,password,interestedIn,dob:`${formatMonth(month)} ${day} ${year}`
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


    




    return (
        <div className={isNew ? "show_signup_card" : "signup_card"}>
                <h3 className='signup_h3'>Sign Up Card</h3>
                <div className="signup_form">
                <div className="form_div">
                <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="username..." autoComplete="off" autoFocus/>
                    <br/>
                <small className='sub-text'>Choose a username</small>
            </div>
            <div className="form_div">
                <label htmlFor="password">Password:</label>
                    <input type="text" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password..." autoComplete="off"/>
                    <br/>
                <small className='sub-text'>Choose a password</small>
            </div>
            <div className="form_div">
                <label htmlFor="interested">Interested in:</label>
                    <input type="text" name="interestedin" id="interestedin" value={interestedIn} onChange={(e)=>setInterestedIn(e.target.value)} placeholder="interested_in..." autoComplete="off"/>
                    <br/>
                <small className='sub-text'>Looking for a friend or...😈</small>
            </div>

        <div className='form_div'>
            <label htmlFor="dob">DOB:</label>
            <div className="dob_form_div">
               
                <div className="dob_input_div">
                    <select className="dob_input" value={month} onChange={(e)=>setMonth(e.target.value)} type="text" name="month" id="month" placeholder="month..." autoComplete="off">
                        {months.map(m=>(
                            <option key={m} value={m}>{m}</option>
                        ))}
                        </select>
                </div>
                <div className="dob_input_div">
                <select className="dob_input" value={day} onChange={(e)=>setDay(e.target.value)} type="text" name="day" id="day" placeholder="day..." autoComplete="off">
                        {days.map((m,idx)=>(
                            <option key={idx+1} value={idx+1}>{idx+1}</option>
                        ))}
                        </select>                </div>
                <div className="dob_input_div">
                <select className="dob_input" value={year} onChange={(e)=>setYear(e.target.value)} type="text" name="year" id="year" placeholder="year..." autoComplete="off">
                        {years.map(m=>(
                            <option key={m} value={m}>{m}</option>
                        ))}
                        </select>                </div>
                    <br/>

            </div>
            <small className="dob_sub_text">Your Date of birth...</small>

                </div>
            
                <button className="sign_up_btn" onClick={enterSignUp}>Sign Up</button>

            </div>

            </div>
    )
}

export default SignUpCard
