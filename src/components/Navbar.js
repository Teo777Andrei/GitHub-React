import React  from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"
const Navbar = props =>{
    
    const styleAbout={
        position:"absolute" ,
        right:"30%"
    }

    const styleHome={
        position:"absolute" ,
        right:"5%"
    }

    const {title  ,  titleColor}= props
    const aboutLink  =  <Link to= "/about">
                        <p className= ''>About</p>
                        </Link>
    
    const homeLink = <Link to= "/">
                     <p className = "">Home</p>
                     </Link>
    
    return(
        <nav className="nav-extended">
    <div className="nav-wrapper">
      <h5 className="brand-logo quicksand">Github  Finder</h5>
      
      
    </div>
    <div className="nav-content">
      <ul className="tabs tabs-transparent">
        <li className="tab waves-effect waves-light">{aboutLink}</li>
        <li className="tab waves-effect waves-light">{homeLink}</li>
        
      </ul>
    </div>
  </nav>

    )

  
}

Navbar.defaultProps ={
    title:"Github Finder" ,
    titleColor:"white" 
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired , 
    titleColor:PropTypes.string.isRequired
}

export default Navbar
