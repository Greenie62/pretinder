import React, {useState} from 'react'

const PWErrorCard = ({errors,password}) => {
    const [success,setSuccess] = useState("")

    const flashSuccess=()=>{
        console.log("flashSuccess() fired!")
        setSuccess("Looks good!")
        setTimeout(()=>{
            setSuccess("")
        },2000)
    }
    return (
        <div className="pw_error_card">
            {success}
     {/* little messy but, 3 terniarys to deal with rendering error/success/null  */}
            
            {password === "" ? null : errors.length ? errors.map(({error},idx)=>(
                <div key={idx} className="error_msg_div"><h4>{error}</h4></div>
            )): password === "" ? "" : <h3 style={{color:'green'}}> Looks good! </h3>}
        </div>
    )
}

export default PWErrorCard
