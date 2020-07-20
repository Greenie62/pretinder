import React from 'react'

const ErrorCard = ({error}) => {
    return (
        <div className={error === "" ? "error_alert" : "show_error_alert"}>
           <h3>Uh-oh!! </h3> <h5> {error}</h5>
        </div>
    )
}

export default ErrorCard
