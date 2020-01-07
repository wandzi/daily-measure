import React from 'react';
import './Signin.css';
import { NavLink } from 'react-router-dom';
import BrandContainer from '../BrandContainer/BrandContainer';

const Signin = () => {
    return (
        <div className="form-container">
            <BrandContainer />
            <h2>Sign-in</h2>
            <form>
                <input type="email" placeholder="Enter your email" id="emailInput"></input>
                <input type="password" placeholder="Password" id="emailInput"></input>
                <NavLink to="/dashboard"><button>Sign-in</button></NavLink>
            </form>
        </div>
    );
}

export default Signin