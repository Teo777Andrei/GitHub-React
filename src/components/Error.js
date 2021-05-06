import React, { Component } from 'react'
import PropTypes from 'prop-types'

function Error({text}) {

    
    return (
        <div className = "card card-body mt-5">
            <div id ="error" className ="text-center">
                <h5 className ="quicksand">{text} form</h5>
<<<<<<< HEAD
                
=======
>>>>>>> a2ef36f4ba16eb525ae27a92062eed32a0cbe73d
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
