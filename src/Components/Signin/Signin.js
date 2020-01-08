import React, { Component } from 'react';
import './Signin.css';
import { NavLink } from 'react-router-dom';
import BrandContainer from '../BrandContainer/BrandContainer';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        return (
            <div className="form-container">
                <BrandContainer />
                <h2>Sign-in</h2>
                <form>
                    <input type="email" placeholder="Enter your email" id="email" onChange={this.handleChange}></input>
                    <input type="password" placeholder="Password" id="password" onChange={this.handleChange}></input>
                    <NavLink to="/dashboard"><button onClick={this.handleSubmit}>Sign-in</button></NavLink>
                </form>
            </div>
        );
    }
}
export default Signin