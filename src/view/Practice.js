import React from 'react';
import '../assets/sass/bookstore.scss';
import Home from './Home';
import TimeOfDay from './TimeOfDay';

class Practice extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			isSignedIn: false
		}
	}
	mySubmitHandler = (event) => {
		event.preventDefault();
		// console.log(this.props);
		console.log(this.state.username)
		let password = this.state.password;
		if (!Number(password)) {
			alert("Your password must be a number");
			
		}
		else if (this.state.username !== this.props.name) {
			alert("user not exist");
		}
		else if (password != this.props.password) {
			alert('password is not correct')
		}
		else {
			this.setState({
				isSignedIn: true
			}, () => alert('you are signed in'))
			// alert('you are signed in')
		}
	}
	onNameChange = (event) =>{
		this.setState({
			username:event.target.value
		})
	}
	onPasswordChange =(event)=>{
		this.setState({
			password:event.target.value
		})
	}
	render() {
		return (
			<form className="wrapper" >
				{
					this.state.isSignedIn ? (
						<div>
							{/* <Home username={this.state.username}/> */}
							<h2>Hello {this.state.username}</h2>
       						<TimeOfDay />
						</div>
					) : (
							<div>
								<p>Enter your name:</p>
								<input
									type='text'
									name='username'
									onChange ={this.onNameChange}
								/>
								<p>Enter your password:</p>
								<input
									type='password'
									name='password'
									onChange={this.onPasswordChange}
								/>
								<br />
								<br />
								<input type='submit' onClick={this.mySubmitHandler} />
							</div>
						)
				}
			</form>
		);
	}

}
export default Practice;