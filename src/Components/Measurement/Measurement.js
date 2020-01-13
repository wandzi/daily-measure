import React, { Component } from 'react';
import './Measurement.css';
import Nav from '../Nav/Nav';
import Measure from '../Measure/Measure';
import { connect } from 'react-redux';

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
        measurement: state.measurement.measurement
    }
}
export default connect(mapStateToProps)(Measurement)