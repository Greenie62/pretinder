import React from 'react'

const InfoModal = ({showInfoModal,clientName,likes,superlikes}) => {
    var emojiSelect=['😍', '😘', '😏', '😎']
    return (
        <div className={showInfoModal ? "show_info_modal" : "info_modal"}>
            <div className='info_modal_header'>
                <h4> 💋{clientName}'s Black-book {emojiSelect[emojiSelect.length * Math.random() | 0]} </h4>
            </div>
            <div className="info_modal_body">
                <div className='info_modal_col mainstats'>
                    <h5 className="mainstats_h5">Likes:{likes}</h5>
                    <h5 className="mainstats_h5">Superlikes:{superlikes}</h5>
                    <h5 className="mainstats_h5">Total:{(likes + superlikes)}</h5>
                </div>
                <div className="info_modal_col matcheslist"></div>
            </div>
            
        </div>
    )
}

export default InfoModal
