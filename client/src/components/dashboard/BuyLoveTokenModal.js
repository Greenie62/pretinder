import React, {useState} from 'react'

const BuyLoveTokenModal = ({showBuyModal,superLikes,setSuperLikes, setShowBuyModal}) => {
    const [ccone, setCCOne] = useState("")
    const [cctwo, setCCTwo] = useState("")
    const [ccthree, setCCThree] = useState("")
    const [ccfour, setCCFour] = useState("");
    const [buyError, setBuyError] = useState("")

    const [tokenCount,setTokenCount] =useState(0);
    const [total,setTotal] = useState("");


    const selectTokenAmt=(e)=>{
        setTokenCount(e.target.value)
        console.log("Count: " + e.target.value)
        setPriceTotal(e.target.value)
    }

    const setPriceTotal=(count)=>{
        switch(count){

            case "5":
                setTotal(15)
            break;

            case "10":
                setTotal(25)
            break;
        

            case "15":
                setTotal(35)
            break;
    

            case "25":
                setTotal(50)
            break;
}
        
    }


    const enterCC = ()=>{
        let cc= `${ccone}-${cctwo}-${ccthree}-${ccfour}`;

        if(cc.length !== 19){
            setBuyError("Invalid CC Number! 😤")
            setTimeout(()=>{
                setBuyError("")
            },1000)
            return;
        }

        alert(`Congrats on your purchase of ${total} tokens. Now get back out there!`)
        setSuperLikes(total)
        setShowBuyModal(!showBuyModal)


        
    }


    const checkKeyCode=(e)=>{
        if(e.keyCode >= 48 && e.keyCode <= 57){
            console.log("looks good!")
        }
        else{
            setBuyError("Umm, CC's dont come in letters. 😩")
            setTimeout(()=>{
                setBuyError("")
            },1000)
        }

    }


  


    return (
        <div className={showBuyModal ? 'show_buylovetoken_modal buylovetoken_modal' : "buylovetoken_modal"}>
                         <div onClick={()=>setShowBuyModal(!showBuyModal)} className="close_buymodal_span">close&times;</div>

            <div className="buylovetokenheader">

                <div className="buylovetokenheaderbubble">
                <h4>Hey there Romeo</h4>
                <h5>Looks like your little down on your love luck</h5>
                <p><strong>No problem</strong>, we got you <a style={{color:'black'}} href="#">covered</a>! 😎</p>
                </div>
            </div>
            <div className="buylovetokenbody">
                <div className="token_radiototal_column">
                <div className='tokenradiocard'>
                <h5>Token Count:</h5>

        <div className='token_radio_div'>
            <label htmlFor="tokencount">5</label>
            <input onClick={(e)=>selectTokenAmt(e)} type="radio" name="tokencount" value="5"></input>
            <label htmlFor="tokencount">10</label>
            <input onClick={(e)=>selectTokenAmt(e)}  type="radio" name="tokencount" value="10"></input>
            <label htmlFor="tokencount">15</label>
            <input onClick={(e)=>selectTokenAmt(e)}  type="radio" name="tokencount" value="15"></input>
            <label htmlFor="tokencount">25</label>
            <input onClick={(e)=>selectTokenAmt(e)}  type="radio" name="tokencount" value="25"></input>
            </div>
        </div>
        <div className="buylovepaydiv">
            <div className='buylove_total_column'>
        <h5>Total:{total}</h5>
        <h5>Tax:{total * .05}</h5>
            <h5>${total + (total * .05)}</h5>
            </div>

            </div>
            </div>

            <div className="buylove_cc_column">
            <label htmlFor="cc">CC:{buyError ? buyError : null}</label>

                <div className="cc_pay_card">
                    <div>
                    <input type="text" className="ccinput" name="ccone" value={ccone} onKeyUp={(e)=>checkKeyCode(e)} onKeyDown={(e)=>{if(e.key === "Backspace"){let temp=JSON.stringify(ccone).split(""); temp.pop();temp.pop();temp.shift(); temp=temp.join(""); console.log(temp); setCCOne(temp)}}} onChange={(e)=>{if(buyError){return}if(ccone.toString().length > 3){setBuyError("Hey hey, no phunny biz!😡");setTimeout(()=>setBuyError(""),1500); return} setCCOne(e.target.value)}} placeholder="cc"/>
                    </div>
                
                    <div>
                    <input type="text" className="ccinput" name="cctwo" value={cctwo} onKeyDown={(e)=>{if(e.key === "Backspace"){let temp=JSON.stringify(cctwo).split(""); temp.pop();temp.pop();temp.shift(); temp=temp.join(""); console.log(temp); setCCTwo(temp)}}} onChange={(e)=>{if(buyError){return}if(cctwo.toString().length > 3){setBuyError("Hey hey, no phunny biz!😡");setTimeout(()=>setBuyError(""),1500); return} setCCTwo(e.target.value)}} placeholder="cc"/>
                    </div>
                
                   <div>
                    <input type="text" className="ccinput" name="ccthree" value={ccthree} onKeyDown={(e)=>{if(e.key === "Backspace"){let temp=JSON.stringify(ccthree).split(""); temp.pop();temp.pop();temp.shift(); temp=temp.join(""); console.log(temp); setCCThree(temp)}}} onChange={(e)=>{if(buyError){return}if(ccthree.toString().length > 3){setBuyError("Hey hey, no phunny biz!😡");setTimeout(()=>setBuyError(""),1500); return} setCCThree(e.target.value)}} placeholder="cc"/>
                    </div>
                   
                    <div>
                    <input type="text" className="ccinput" name="ccfour" onKeyDown={(e)=>{if(e.key === "Backspace"){let temp=JSON.stringify(ccfour).split(""); temp.pop();temp.pop();temp.shift(); temp=temp.join(""); console.log(temp); setCCFour(temp)}}} value={ccfour} onChange={(e)=>{if(buyError){return}if(ccfour.toString().length > 3){setBuyError("Hey hey, no phunny biz!😡");setTimeout(()=>setBuyError(""),1500); return} setCCFour(e.target.value)}} placeholder="cc"/>
                    </div>
                </div>
                <div className='cc_option_row'>
                    <p className="cc_p">AX <br/><i class='fa fa-cc-amex'></i></p>
                    <p className="cc_p">MC <br/><i class='fa fa-cc-mastercard'></i></p>
                    <p className="cc_p">Visa <br/><i class='fa fa-cc-visa'></i></p>
                </div>

                <button onClick={enterCC} className='purchase_btn'>Buy $$$</button>
            </div>
        
            
            </div>
            
        </div>
    )
}

export default BuyLoveTokenModal
