import React, {useState} from 'react'

const Panel = ({data}) => {
    const [count,setCount] = useState(0)
  
    return (
    <div className="panel_card">
            <div className='panel_column'>
<h1 className="arrow_icon"> <i class="fa fa-arrow-left" aria-hidden="true"></i></h1>
            </div>
           
            <div className="panel_profile_column">
            {data.length ?
        <div className="image_frame_parent">
            
            <div className="image_frame">
                 <img src={data[count].picture.large} className="main_img"/>
            </div>
            
            <div className="image_info_div">
                <h4 className="h4_image_name">{data[count].name.first} {data[count].name.last}</h4>
            </div>
            
        </div>


                          : "Loading..." }
            </div>
        
        <div className="panel_column">
            <h1 className="arrow_icon"> <i class="fa fa-arrow-right" aria-hidden="true"></i></h1>
        </div>
        
    </div>
    )
}

export default Panel
