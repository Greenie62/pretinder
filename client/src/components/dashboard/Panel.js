import React, {useState} from 'react'
import party from "../../assets/party.jpg"

const Panel = ({data,loveToken}) => {
    const [count,setCount] = useState(0)


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
        if(count <= 0){
            console.log("cant decrement anymore dickhead")
        }
        else{
        setCount(count-1)
        }
    }

    const countUp=()=>{
        if(count > data.length-1){
            console.log("cant increment anymore dickhead")
        }
        else{
        setCount(count+1)
        }
    }
  
    return (
    <div className="panel_parent_card">
    <div className="panel_overlay">
        <img src={party} className="overlay_img" alt="img"/>
    </div>
       
        <div className="panel_card">
            <div className='panel_column'>
<h1 data-direction="left" onClick={(e)=>changePic(e)} className="arrow_icon"> <i data-direction="left" className="fa fa-arrow-left" aria-hidden="true"></i></h1>
            </div>
           
            <div className="panel_profile_column">
            {data.length ?
        <div className="image_frame_parent">
            
            <div className="image_frame">
                 <img src={data[count].picture.large} className="main_img"/>
            </div>
            
            <div className="image_info_div">
                <h2 className="h4_image_name">{data[count].name.first} {data[count].name.last}</h2>
            </div>
            <div className="image_reaction_row">
                <div className="reaction_div"> <i className="fas fa-check check"></i> Like </div>
                <div className="reaction_div"> <i className="fas fa-times x"></i> Dislike </div>
                <div className="reaction_div"> <i className="fas fa-heart heart"></i> Love<small className="loveTokenCount">({loveToken})</small> </div>
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
