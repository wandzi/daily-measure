import React, { Component } from 'react';
import './Signup.css';
import { NavLink } from 'react-router-dom';
import BrandContainer from '../BrandContainer/BrandContainer';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../Store/Actions/authActions';

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
        this.props.signUp(this.state);
    }

    render() {
        const { auth } = this.props
        if (auth.uid) return <Redirect to="/dashboard"/>
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

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)