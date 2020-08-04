import React, {useState} from 'react'

const EmailModal = ({email,showEmailCard,client}) => {
    const [subject,setSubject] = useState("");
    const [message,setMessage] = useState("")

    const enterMessage=()=>{
        console.log(client,message,subject)
    }
    return (
        <div className={showEmailCard ?  "show_email_card" : "email_card"}>
            <h3>To:{email}</h3>
            <label htmlFor="subject"></label>
            <input type="text" id="subject" name="subject" value={subject} onChange={(e)=>setSubject(e.target.value)} placeholder="subject..." autoComplete="off"/>
            <br/>
            <textarea id="message" name="message" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="message..." autoComplete="off"/>
            <button onClick={enterMessage} className='sendMsgBtn'>Send  💌 </button>
        </div>
    )
}

export default EmailModal
