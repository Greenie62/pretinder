import React from 'react'

const AlertModal = ({h2Alert,h5Alert}) => {
    return (
        <div className={h2Alert === "" ? "hide_alert_modal alert_modal" : "alert_modal"}>
                <h2>{h2Alert}</h2>
                <h5>{h5Alert}</h5>
                <h5>Click on their profile to learn more! :)</h5>
        </div>
    )
}

export default AlertModal
