import React, { Component } from 'react'
import Practice from './Practice';

class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            email:''
        }
    }
   

    render() {
        return (
            <div>
                <p>Enter your name:</p>
                <input
                    type='text'
                    name='username'
                    onChange={this.myChangeHandler}
                />
                <p>Enter your password:</p>
                <input
                    type='password'
                    name='password'
                    onChange={this.myChangeHandler}
                />
                <br />
                <br />
                <input type='submit' onClick={this.mySubmitHandler} />
            </div>
        )
    }
}

export default SignUp
