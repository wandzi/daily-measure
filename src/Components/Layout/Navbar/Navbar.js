import React, { Component } from 'react';
import './Navbar.css';
import M from "materialize-css";
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

class Navbar extends Component {
    componentDidMount() {
        M.AutoInit();
        let selects = document.querySelectorAll('select');  
        M.FormSelect.init(selects, {});
    }
    render() {
        return (
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo">dailyMeasure</a>
                        <SignedInLinks />
                        <SignedOutLinks />
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar