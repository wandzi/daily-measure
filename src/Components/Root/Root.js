import React from 'react';
import './Root.css';
import { NavLink } from 'react-router-dom';

const Root = () => {
    return (
        <div className="root-container">
            <a href="/"><i className="material-icons info-btn">info_outline</i></a>
            <img className="logo" src="./img/blood-drop.png" alt="logo"/>
            <div className="logo-container">
                <h2>dailyMeasure</h2>
            </div>
            <p className="kicker">Your free blood preasure diary!</p>
            <NavLink to="/signin"><button className="signin-btn">Sign-in</button></NavLink>
            <div className="signup-container">
                <p>Don't have an account?</p>
                <a href="/signup" className="signup-btn">Sign-up</a>
            </div>
        </div>
    );
}

export default Root