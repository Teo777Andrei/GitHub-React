import React, { Component } from 'react'
import axios from "axios"
import quotes from "../quotes/quotes"
import {Link} from "react-router-dom"
export class UserProfile extends Component {
    constructor(props){
        super(props)
        this.state={
            userName:this.props.userId , 
            avatar : "" ,
            userId: "" , 
            publicRepos :"", 
            location:"" , 
            hireable:"" ,
            gitHubLink :"#"  , 
            followers :"" ,
            following:"" , 
            company :"" ,
            email:"" ,
        }
        this.profilePicStyle= {
            position:"relative" ,
            borderRadius:"50%" , 
            width:"70%" ,
           
    
        }
    }

    async componentDidMount(){   
        const response= await axios.get(`https://api.github.com/users/${this.props.userId}?
                                        client_id=${process.env.REACT_APP_CLIENT_ID}&
                                        client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
        const responseJson = response.data 
        
        this.setState({avatar:responseJson.avatar_url  , 
                      userName:responseJson.login ,
                      location:String(responseJson.location),
                      hireable:String(responseJson.hireable),
                      publicRepos:responseJson.public_repos  ,
                      userId:responseJson.id ,
                      gitHubLink:responseJson.html_url ,
                      following:responseJson.following ,
                      followers:responseJson.following ,
                      company: String(responseJson.company),
                      email:String(responseJson.email)  })
        console.log(this.state.hireable  , this.state.location)
    }

    render() {
        let quoteIndex = Math.floor(Math.random() * quotes.length)
        let quotedashIndex =quotes[quoteIndex].search(/-/)

        console.log(this.props.userId)
        return (
            <div className = "container-fluid">
                <div className= "card card-body mt-4">
                    
                    <div className ="row">
                        <div className ="col md-4">
                            
                            <div className="row">
                                <div className="col s12 m5">
                                    <div className="card-panel teal">
                                        <span className="white-text">
                                            <h5 className ="quicksand">{quotes[quoteIndex].slice(0 ,quotedashIndex)}</h5>
                                            <h5 className ="quicksand">{quotes[quoteIndex].slice(quotedashIndex   ,)}</h5>
                                        </span>
                                    </div>
                                </div>
                            
                            </div>
                           
                        </div>
                        <div className ="col md-4  center">
                            <img className ="img-thumbnail "style={this.profilePicStyle} src={this.state.avatar} />
                            <h4 className="quicksand">User : {this.state.userName}</h4>
                            <a href= {this.state.gitHubLink} className="btn mt-3">Go to Git</a>
                        </div>
                        

                        <div className= "col md-4">
                            <ul  className ="collection with-header">
                                <li style={{border:"1px solid #99ccff"}} className="collection-header">
                                    <h5 className= "quicksand">Contents</h5>
                                </li>
                                <li style={{border:"1px solid #99ccff"}} className ="collection-item">user id: {this.state.userId}</li>
                                <li style={{border:"1px solid #99ccff"}} className ="collection-item">location: {this.state.location}</li>
                                <li style={{border:"1px solid #99ccff"}} className ="collection-item">public repos: {this.state.publicRepos}</li>
                                <li style={{border:"1px solid #99ccff"}}className ="collection-item">hireable : {this.state.hireable}</li>
                                <li style={{border:"1px solid #99ccff"}}className ="collection-item">followers: {this.state.followers}</li>
                                <li style={{border:"1px solid #99ccff"}}className ="collection-item">following: {this.state.following}</li>
                                <li style={{border:"1px solid #99ccff"}}className ="collection-item">company: {this.state.company}</li>
                                <li style={{border:"1px solid #99ccff"}}className ="collection-item">email: {this.state.email}</li>


                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default UserProfile
