import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import BrandContainer from '../BrandContainer/BrandContainer';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: '0%', 
        }
        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav() {
        var newHeight = this.state.height === '0%' ? '100%' : '0%';
        this.setState({ height: newHeight });
    }

    render() {
        return(
            <>
                <nav className="nav">
                    <div className="nav-logo">
                        <img className="mini-logo" src="./img/blood-drop.png" alt="logo"/>dailyMeasure
                    </div>
                    <i className="material-icons" id="menuIcon" onClick={this.toggleNav}>menu</i>
                </nav>
                
                <div id="myNav" className="overlay" style={{height: this.state.height}}>
                    <i className="material-icons closebtn" onClick={this.toggleNav}>close</i>
                    <div className="overlay-content">
                        <BrandContainer />
                        <NavLink to="/dashboard" onClick={this.toggleNav} className="app-btn"><i className="material-icons menu-item">dashboard</i>Dashboard</NavLink>
                        <NavLink to="/addmeasure" onClick={this.toggleNav} className="app-btn"><i className="material-icons menu-item">add</i>Add measure</NavLink>
                        <NavLink to="/measurement" onClick={this.toggleNav} className="app-btn"><i className="material-icons menu-item">insert_chart</i>Measurement</NavLink>
                        <NavLink to="/" onClick={this.toggleNav} className="app-btn"><i className="material-icons menu-item">exit_to_app</i>Sign-out</NavLink>
                    </div>
                </div>
            </>
        );
    }
}
export default Nav 