import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import party from "../../assets/party.jpg"
import AlertModal from "./AlertModal"

const Panel = ({profileinfo,setProfileInfo,data,loveToken,setLoveToken,likes,superlikes,setSuperLikes,setLikes}) => {
    const [count,setCount] = useState(0)
    const [showLoveCount,setShowLoveCount] = useState(false)
    const [h2Alert,seth2Alert] = useState("")
    const [h5Alert,seth5Alert] = useState("")
    const [showProfileLink, setShowProfileLink] = useState(false)





    const changePic=(e)=>{
        let dir=e.target.getAttribute("data-direction");
        console.log(dir)
        switch(dir){

            case "right":
                countUp()
            break;

            case "left":
                countDown()
            break;

            default:
        }
        
    }

    const countDown=()=>{
        setShowProfileLink(false)

        if(count <= 0){
            console.log("cant decrement anymore dickhead")
        }
        else{
        setCount(count-1)
        
        }
    }

    const countUp=()=>{
        setShowProfileLink(!false)

        if(count > data.length-1){
            console.log("cant increment anymore dickhead")
        }
        else{
        setCount(count+1)

        }
    }
    
    const likePerson=()=>{
        console.log("likePerson()")

        if(yayOrNay("like")){
            setLikes(likes+1)
            addDialogue()
            setShowProfileLink(!showProfileLink)

        }
        else{
        setTimeout(()=>{
            countUp()
        },1000)
    }
    }


    const lovePerson=()=>{
        if(loveToken <= 0){
            console.log("no more love tokens romeo!")
        }
        else{
        setLoveToken(loveToken-1)
        setShowLoveCount(true)
        if(yayOrNay('love')){
            addDialogue()
            setSuperLikes(superlikes+1)
            setShowProfileLink(!showProfileLink)
        }
        else{
            setTimeout(()=>{
                countUp()
            },2000)
        }
    }
        setTimeout(()=>{
            setShowLoveCount(false)
        },1750)
    
    }


    const yayOrNay=(reaction)=>{
        let verdict=false
        switch(reaction){

            case "love":
                verdict = Math.random() > .6;
              
            break;
            
            case "like":
                verdict = Math.random() > .3;
            break;

            default:
                console.log("error")
        }
        console.log(verdict);
        return verdict
    }

    const addDialogue=()=>{
        let h2Greetings=["Awesome!", "Congrats!!","Whoahhhh","Oooooo!!", "Wow!!"]
        
        seth2Alert(h2Greetings[h2Greetings.length * Math.random() | 0])
        seth5Alert("They like you  back! :)")

        setTimeout(()=>{
            seth2Alert("")
        },2500)
    }
  
    return (
    <div className="panel_parent_card">
    <div className="panel_overlay">
        <img src={party} className="overlay_img" alt="img"/>
    </div>
       
        <div className="panel_card">
            <div className='panel_column'>
                <AlertModal h2Alert={h2Alert} h5Alert={h5Alert}/>
<h1 className="h1_column_div" data-direction="left" onClick={(e)=>changePic(e)} className="arrow_icon"> <i data-direction="left" className="fa fa-arrow-left" aria-hidden="true"></i></h1>
        <div className='empty_div'></div>
            </div>
           
            <div className="panel_profile_column">
            {data.length ?
        <div className="image_frame_parent">
            
            <div className="image_frame">
                 <img src={data[count].picture.large} className="main_img"/>
            </div>
            
            <div className="image_info_div">
                <Link style={{display:showProfileLink ? "block" : "none"}} onClick={()=>setProfileInfo(data[count])} to="/profile">View Profile</Link>
                <h2 className="h4_image_name">{data[count].name.first} {data[count].name.last}</h2>
            </div>
            <div className="image_reaction_row">
                <div onClick={likePerson} className="reaction_div"> <i className="fas fa-check check"></i> Like </div>
                <div onClick={countUp} className="reaction_div"> <i className="fas fa-times x"></i> Dislike </div>
                <div onClick={lovePerson} className="reaction_div"> <i className="fas fa-heart heart"></i> Love<small style={{display: showLoveCount  ? 'block' : 'none'}}>({loveToken})</small> </div>
                </div>
            
        </div>


                          : "Loading..." }
            </div>
        
        <div className="panel_column">
            <h1 data-direction="right" onClick={(e)=>changePic(e)} className="arrow_icon"> <i data-direction="right" className="fa fa-arrow-right" aria-hidden="true"></i></h1>
        </div>
        
    </div>



    </div>
    )
}

export default Panel
