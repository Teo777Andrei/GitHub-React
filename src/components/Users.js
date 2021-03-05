import React, { Component } from 'react'
import {Link} from "react-router-dom"
class Users extends Component {

    
    render() {
        
        const {users} = this.props
        let usersArray = <div></div>
        
        
        if(users.length!== 0){
            usersArray = users.map( (user , index)=>{
                return(
                    <div key ={index} className="card card-body mt-3">
                        <div className="row">
                            <div className ="col md-8 center" >
                            
                                <img className  = "user-image-custom"src ={user.avatar_url}></img>
                            </div>
                            <div className= "col md-4">
                                <h5 className = "mb-2 quicksand">{user.login}</h5>
                                <Link to={`users/${user.login}`} className="btn ">More</Link>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        
        return (
            <div id="users">
                {usersArray}
            </div>
        )
    }
}

export default Users
