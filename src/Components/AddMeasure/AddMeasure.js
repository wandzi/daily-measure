import React, {Component}  from 'react';
import './AddMeasure.css';
import Nav from '../Nav/Nav';
import { connect } from 'react-redux';
import { addMeasure } from '../../Store/Actions/measurementAction';

class AddMeasure extends Component {
    constructor(props){
        super(props);
        this.state = {
            systolic: 120,
            diastolic: 80,
            pulse: 80,
            description: '',
            date: new Date().toLocaleString(),
        };
        this.increaseValue = this.increaseValue.bind(this);
        this.decreaseValue = this.decreaseValue.bind(this);
        this.submitMeasure = this.submitMeasure.bind(this);
    }
    componentDidMount() {
        this.intervalID = setInterval(
            () => this.refreshTime(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    refreshTime() {
        this.setState({
            date: new Date().toLocaleString()
        });
    }

    increaseValue = (event) => {
        const name = event.target.getAttribute('name');
        this.setState({ [name]: this.state[name] + 1 });
    }

    decreaseValue = (event) => {
        const name = event.target.getAttribute('name');
        this.setState({ [name]: this.state[name] - 1 });
    }

    handleChange= (event) => {
        this.setState({
            description: event.target.value,
        })
    }

    submitMeasure = () => {
        this.props.addMeasure(this.state);
    }

    render() {
        return(
            <div className="add-measure-container">
                <Nav />
                <div className="add-measure">

                    <div className="spinner-container">
                        <i className="material-icons" name="systolic" onClick={this.increaseValue}>keyboard_arrow_up</i>
                        <h1>{this.state.systolic}</h1>
                        <i className="material-icons" name="systolic" onClick={this.decreaseValue}>keyboard_arrow_down</i>
                        <p className="name-pressure-label">Systolic</p>
                        <p>mmHg</p>
                    </div>

                    <div className="spinner-container">
                        <i className="material-icons" name="diastolic" onClick={this.increaseValue}>keyboard_arrow_up</i>
                        <h1>{this.state.diastolic}</h1>
                        <i className="material-icons" name="diastolic" onClick={this.decreaseValue}>keyboard_arrow_down</i>
                        <p className="name-pressure-label">Diastolic</p>
                        <p>mmHg</p>
                    </div>

                    <div className="spinner-container">
                        <i className="material-icons" name="pulse" onClick={this.increaseValue}>keyboard_arrow_up</i>
                        <h1>{this.state.pulse}</h1>
                        <i className="material-icons" name="pulse" onClick={this.decreaseValue}>keyboard_arrow_down</i>
                        <p className="name-pressure-label">Pulse</p>
                        <p>bpm</p>
                    </div>

                </div>
                <input className="description-input" type="text" placeholder="Short description.." onChange={this.handleChange}></input>
                <p className="measure-date" id="measureDateContainer">{this.state.date}</p>
                <button className="app-btn"><i className="material-icons menu-item" onClick={this.submitMeasure}>add</i>Add</button>
            </div>
        );
    }
}
    

const mapDispatchToProps = (dispatch) => {
    return {
        addMeasure: (measure) => dispatch(addMeasure(measure))
    }
}
export default connect(null, mapDispatchToProps)(AddMeasure)