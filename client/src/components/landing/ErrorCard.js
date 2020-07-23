import React from 'react'

const ErrorCard = ({error,errortwo}) => {
    return (
        <div className={error === "" ? "hide-error-alert" : "error-alert"}>
            <small> {error}</small>
            <small>{errortwo}</small>
        </div>
    )
}

export default ErrorCard
