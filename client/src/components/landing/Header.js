import React, {useState, useEffect} from "react"
import social from "../../assets/social/social.jpg"
import socialtwo from "../../assets/social/socialtwo.jpg"



const Header = () =>{
    const [pics, setPics] = useState([social, socialtwo])
    const [counter,setCounter] = useState(0);


 

    useEffect(()=>{
        slideshow()
     
    },[])


    const slideshow=()=>{
        console.log(counter)
       
        setCounter(counter+1);

        if(counter >= pics.length){
            setCounter(0)
        }
        
    setTimeout(slideshow,2500)

           }

    


    return(
        <div className='landing-header'>
            <div className='landing_header_overlay'>
                <img src={pics[Math.random() * pics.length | 0]} alt="img" className="overlay_img"/>
            </div>
            <div className="landing_header_card">
            <h1 className='landingh1'>Tinder App</h1>
            <h4 className="landingh4">You find love. ❤️</h4>
            <h5 className="landingh5">I find a job. 💰 </h5>
            </div>
        </div>
    )



}



export default Header;