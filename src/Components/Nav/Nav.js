import React, { Component } from 'react';
import './Nav.css';

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
                    <i class="material-icons closebtn" onClick={this.toggleNav}>close</i>
                    <div className="overlay-content">
                        <a href="/home"><i class="material-icons menu-item">add</i>Add measure</a>
                        <a href="/home"><i class="material-icons menu-item">insert_chart</i>Measurement</a>
                        <a href="/"><i class="material-icons menu-item">exit_to_app</i>Sign-out</a>
                    </div>
                </div>
            </>
        );
    }
}
export default Nav 