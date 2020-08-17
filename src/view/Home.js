import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render({username}) {
        // const state = this.state;
        return (
            <div>
               <h1>
                     Hello {username}
               </h1> 
            </div>
        )
    }
}

export default Home
