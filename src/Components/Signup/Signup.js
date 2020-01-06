import React from 'react';
import './Signup.css';
import { NavLink } from 'react-router-dom';
import BrandContainer from '../BrandContainer/BrandContainer';

const Signup = () => {
    return(
        <div className="form-container">
            <BrandContainer />
            <h2>Sign-up</h2>
            <p className="signup-kicker">and use it for free!</p>
            <form>
                <input type="name" placeholder="Name" id="nameInput"></input>
                <input type="surname" placeholder="Surname" id="surnameInput"></input>
                <input type="email" placeholder="Enter your email" id="emailInput"></input>
                <input type="password" placeholder="Password" id="passwordlInput"></input>
                <NavLink to="/signin"><button>Sign-up</button></NavLink>
            </form>
        </div>
    );
}

export default Signup