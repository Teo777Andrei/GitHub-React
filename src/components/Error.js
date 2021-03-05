import React, { Component } from 'react'
import PropTypes from 'prop-types'

function Error({text}) {

    
    return (
        <div className = "card card-body mt-5">
            <h4 className ="quicksand">{text}</h4>
        </div>
    )
    
}

Error.defaultProps ={
    text:"Error"
}

Error.propTypes= {
    text:PropTypes.string.isRequired
}


export default Error
