import React, { Component } from 'react';
import './Application.css';
import { Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Dashboard from '../Dashboard/Dashboard';
import AddMeasure from '../AddMeasure/AddMeasure';

class Application extends Component {
    render() {
        return(
            <>
                <Nav />
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route path="/addmeasure" component={AddMeasure}/>
            </>
        );
    }
}

export default Application