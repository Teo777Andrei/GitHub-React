
import React, { Component } from 'react'
import Users from './Users'

class Cards extends Component {
    
    render() {
       
        const {users} = this.props
        return (
            <React.Fragment>
                <Users users={users}/>
            </React.Fragment>
        )
    }
}

export default Cards
