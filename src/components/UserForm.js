import React, { Component } from 'react'

class UserForm extends Component {
    
    constructor(props){
        super(props)
        this.state ={
            inputVal :""
        }
    }

    onChange = (event)=>{
        this.setState({inputVal:event.target.value})      
    }
    
    
    onSubmit = async  event =>{
        await this.props.changeErrorState(this.state.inputVal)
        
        if(this.props.errorState !== "empty"){
            this.props.fetchUsers(this.state.inputVal)
        }
        
        event.preventDefault()      
    }
    
    

    render() {
        const {areCardsShown ,deleteCards} = this.props
    
        return (
        
            <div className = "card card-body mt-3">
                <h4 className= "quicksand">Insert user name to find </h4>
                <form onSubmit ={this.onSubmit}>
                    <input   type ="text" value ={this.state.inputVal}
                    onChange ={this.onChange}/>
                    <br />
                    <button color="white" type= "submit"  value ="Search" className ="btn waves-effect waves-light mt-4">
                        Search
                    </button>
                </form>
                {areCardsShown === true ? 
                <button onClick ={deleteCards} className= "btn btn-dark mt-4 ">Erase users</button> : 
                <React.Fragment />
                }   
                </div>
                
        )
    }
}

export default UserForm
