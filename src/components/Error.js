import React, { Component } from 'react'
import PropTypes from 'prop-types'

function Error({text}) {

    
    return (
        <div className = "card card-body mt-5">
            <div id ="error" className ="text-center">
                <h5 className ="quicksand">{text} form</h5>
                
            </div>
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
