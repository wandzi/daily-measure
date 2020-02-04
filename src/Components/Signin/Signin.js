import React, { Component } from 'react';
import './Signin.css';
import { NavLink } from 'react-router-dom';
import BrandContainer from '../BrandContainer/BrandContainer';
import { connect } from 'react-redux';
import { signIn } from '../../Store/Actions/authActions';
import { Redirect } from 'react-router-dom';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        this.props.signIn(this.state);

    }

    componentDidUpdate() {
        const { auth } = this.props;
        if (auth.uid) return <Redirect to="/dashboard"/>
    }

    render() {
        const { authError } = this.props;
        return (
            <div className="form-container">
                <BrandContainer />
                <h2>Sign-in</h2>
                <form>
                    <input type="email" placeholder="Enter your email" id="email" onChange={this.handleChange}></input>
                    <input type="password" placeholder="Password" id="password" onChange={this.handleChange}></input>
                    { authError ? <p className="error">{authError}</p> : null }
                    <NavLink to="/dashboard"><button onClick={this.handleSubmit}>Sign-in</button></NavLink>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signin)