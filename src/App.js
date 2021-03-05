import axios from "axios";
import {BrowserRouter as Router , Switch  , Route} from "react-router-dom"
import React from "react"
import Cards from "./components/Cards";
import Navbar from "./components/Navbar"
import UserForm from "./components/UserForm"
import Loading  from "./components/Loading"
import Error from "./components/Error"
import Warning from "./components/Warning"
import About from "./components/About"
import UserProfile from "./components/UserProfile"
import Users from "./components/Users"
import appCss from "./App.css"

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      users:undefined,
      loading : null ,
      areCardsShown: undefined , 
      errorState:undefined ,
      warningState:undefined
    }
  }

  async fetchUsers(text){
    this.setState({loading:true})
    
    const response = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
    
    const responseJson = response.data
    this.setState({users:responseJson.items ,loading:false ,areCardsShown :(responseJson.items.length === 0 ? false: true) ,
                  warningState:(responseJson.items.length===0 ? true: false)})
    
  }
  
  deleteCards(){
    this.setState({areCardsShown:false })
  }

  changeErrorState(inputText){

    if(inputText === ""){
      this.setState({errorState:"empty" ,areCardsShown:false})
    }
    else{
      this.setState({errorState:false})
    }
  }

  renderCards(){
    
    if(this.state.loading ===  true){
      return <Loading/>
    }
    else if(this.state.errorState === "empty"){
      
      return <Error  text= {this.state.errorState}/>
    }    
    else if(this.state.areCardsShown){
      return <Cards users={this.state.users}/>
    }
    else if(this.state.warningState  === true){
      return <Warning text="No user found"/>
    }
    
  }

  render(){
    
    return (
      <Router>
        <React.Fragment>
            <Navbar  title = "Github Finder" /> 
            <Switch>
              <Route exact  path ="/">
                <div className = "container">
                
                <UserForm
                    deleteCards= {this.deleteCards.bind(this)}
                    areCardsShown={this.state.areCardsShown} 
                    fetchUsers={this.fetchUsers.bind(this)}
                    errorState= {this.state.errorState}
                    changeErrorState= {this.changeErrorState.bind(this)}/>
                {this.renderCards()}  
              </div>
            </Route>
              
            <Route path ="/about" render={props =>
              
              <About userID  = {props.match.params.userid}/>
              }>  
            </Route>

            <Route path ="/users/:userId" render={ props =>
              <UserProfile userId ={props.match.params.userId}/>}
            >

            </Route>
          </Switch>
        </React.Fragment>
      </Router>
    )
  }
}



export default App;
