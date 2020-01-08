import React from 'react';
import './AddMeasure.css';
import Nav from '../Nav/Nav';

const AddMeasure = () => {
    return(
            <div className="add-measure-container">
                <Nav />
                <div className="add-measure">

                    <div className="spinner-container">
                        <i className="material-icons">keyboard_arrow_up</i>
                        <h1>120</h1>
                        <i className="material-icons">keyboard_arrow_down</i>
                        <p className="name-pressure-label">Systolic</p>
                        <p>mmHg</p>
                    </div>

                    <div className="spinner-container">
                        <i className="material-icons">keyboard_arrow_up</i>
                        <h1>87</h1>
                        <i className="material-icons">keyboard_arrow_down</i>
                        <p className="name-pressure-label">Diastolic</p>
                        <p>mmHg</p>
                    </div>

                    <div className="spinner-container">
                        <i className="material-icons">keyboard_arrow_up</i>
                        <h1>90</h1>
                        <i className="material-icons">keyboard_arrow_down</i>
                        <p className="name-pressure-label">Pulse</p>
                        <p>bpm</p>
                    </div>

                </div>
                <input type="text" placeholder="Short description.." className="description-input"></input>
                <p className="measure-date" id="measureDateContainer">07.01.2019 - 12:45</p>
                <button className="app-btn"><i className="material-icons menu-item">add</i>Add</button>
            </div>
    );
}

export default AddMeasure