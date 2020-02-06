import React, { Component } from 'react';
import './Measurement.css';
import Nav from '../Nav/Nav';
import Measure from '../Measure/Measure';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Measurement extends Component {
    render() {
        const data = this.props;
        return(
            <div className="measurement-container"> 
                <Nav />
                { data.measurement && data.measurement.map( measure => {
                    return (
                        <Measure measure={measure} key={measure.id}/>
                    )   
                })}
            </div>
        );         
    }
}

const mapStateToProps = (state) => {
    return {
        measurement: state.firestore.ordered.measurement
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'measurement', orderBy:['date', 'desc'] }
    ])
)(Measurement)