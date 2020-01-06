import React, { Component } from 'react';
import './Home.css';
import Nav from '../Nav/Nav';
import LastMeasureResult from '../LastMeasureResult/LastMeasureResult'

class Home extends Component {
    render() {
        return(
            <div className="home-container">
                <Nav />
                <div className="dashboard">
                <img src="./img/me.png" alt="logo" className="my-photo"/>
                <h1>Welcome, Mateusz</h1>
                <LastMeasureResult/>
                </div>
            </div>
        );
    }
}

export default Home