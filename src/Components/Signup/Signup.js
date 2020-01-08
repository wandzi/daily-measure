import React, { Component } from 'react';
import './Signup.css';
import { NavLink } from 'react-router-dom';
import BrandContainer from '../BrandContainer/BrandContainer';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    }

    handleChange = (ev) => {
        this.setState({
            [ev.target.id]: ev.target.value,
        });
    }

    handleSubmit = (ev) => {
        console.log(this.state);
    }

    render() {
        return(
            <div className="form-container">
                <BrandContainer />
                <h2>Sign-up</h2>
                <p className="signup-kicker">and use it for free!</p>
                <form>
                    <input type="name" placeholder="Name" id="firstName" onChange={this.handleChange}></input>
                    <input type="surname" placeholder="Surname" id="lastName" onChange={this.handleChange}></input>
                    <input type="email" placeholder="Enter your email" id="email" onChange={this.handleChange}></input>
                    <input type="password" placeholder="Password" id="password" onChange={this.handleChange}></input>
                    <NavLink to="/signin"><button onClick={this.handleSubmit}>Sign-up</button></NavLink>
                </form>
            </div>
        );
    }
}

export default Signup