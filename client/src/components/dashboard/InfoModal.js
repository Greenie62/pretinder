import React, {useEffect,useState} from 'react'
import {Link} from "react-router-dom"
import party from "../../assets/social/social.jpg"


const InfoModal = ({showInfoModal,client,clientName,likes,superlikes,profileinfo,setProfileInfo}) => {
    var emojiSelect=['😍', '😘', '😏', '😎']
    const [matches, setMatches] = useState([])
    const [batch, setBatch] = useState([])
    const [loaded,setLoaded] = useState(false)
    const [pages, setPages] = useState([])


    useEffect(()=>{
               console.log(client)
            if(client.matches){
                let matchesRef=client.matches
                console.log(matchesRef)
                console.log("?????")
            if(client.matches.length >= 3){
                 matchesRef=paginate(client.matches)
             }
            
             setMatches(client.matches)
             setBatch(matchesRef)
             setLoaded(true)
            }

    },[clientName,client])


    function paginate(matches){
        console.log("paginate fired!")
        let batch= matches.slice(0,3);
        batch.push({name:"..."})
        console.log("Batch: " + batch);
        createPages(matches)

        return batch

    }

    function createPages(matches){
        let temppages=[];
        for(let y=1;y<=matches.length/3;y++){
            temppages.push(y)
        }
        console.log(temppages)
        setPages(temppages)
    }


    function changePage(page){
        console.log("Page: " + page)

        let lastIndex=3 * page;
        let firstIndex=lastIndex-3;
        let tempMatches=matches;
        tempMatches=tempMatches.slice(firstIndex,lastIndex);
        setBatch(tempMatches)
    }


    
    return (
        <div className={showInfoModal ? 'show_info_modal_container' : "info_modal_container"}>
       <div className="info_modal_overlay">
           <img src={party} className='info_overlay_img' alt="overlay_img"/>
       </div>
       
        <div className="info_modal">
            <div className='info_modal_header'>
                <h4> 💋{clientName}'s Black-book {emojiSelect[emojiSelect.length * Math.random() | 0]} </h4>
            </div>
            <div className="info_modal_body">
                <div className='info_modal_col mainstats'>
                    <h5 className="mainstats_h5">Likes:<span className='info_modal_white_text'>{likes}</span></h5>
                    <h5 className="mainstats_h5">Superlikes:<span className='info_modal_white_text'>{superlikes}</span></h5>
                    <h5 className="mainstats_h5">Total:<span className='info_modal_white_text'>{(likes + superlikes)}</span></h5>
                </div>

                <div className="info_modal_col">
                    <h5 className="info_modal_white_text">Matches:</h5>
                <div className="matches_list">
                {loaded ?  !batch.length ?  "No matches yet!" : batch.map((m,idx)=>(
                    <li className="match_item" key={idx}>
                        <p className='info_modal_match_p'>{m.name}</p>

                        <div style={{opacity:m.name === "..." ? 0 : 1, display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>
                        <h5><Link onClick={()=>setProfileInfo(m)} to="/profile"><i className='fas fa-user'></i> </Link></h5>
                        <form action={`/db/trashmatch/${clientName}/${m.name}?_method=DELETE`} method="POST">
                            <button type='submit'><i className='fas fa-trash'></i></button>
                        </form>
                        </div>
                        
                        {/* <p className='info_modal_match_p'>{m.name}</p> */}
                        </li>
                )): " Loading... "}
                </div>
                
                <div className='pages_div'>
                    <ul className='pages_ul'>
                    {pages.length ? pages.map(p=>(
                    <li onClick={()=>changePage(p)} key={p} className='page-item'><a href="#">{p}</a></li>
                    )) : null }
                    </ul>
                </div>

                </div>
            </div>


        </div>

        </div>
    )
}

export default InfoModal
