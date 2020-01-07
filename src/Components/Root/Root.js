import React from 'react';
import './Root.css';
import { NavLink } from 'react-router-dom';

const Root = () => {
    return (
        <div className="root-container">
            <NavLink to="/informations"><i className="material-icons info-btn">info_outline</i></NavLink>
            <img className="logo" src="./img/blood-drop.png" alt="logo"/>
            <div className="logo-container">
                <h2>dailyMeasure</h2>
            </div>
            <p className="kicker">Your free blood preasure diary!</p>
            <a href="/signin"><button className="appBtn">Sign-in</button></a>
            <div className="signup-container">
                <p>Don't have an account?<NavLink to="/Application"><button className="signup-btn">Sign-up</button></NavLink></p>
            </div>
        </div>
    );
}

export default Root