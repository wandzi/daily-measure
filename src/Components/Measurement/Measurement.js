import React from 'react';
import './Measurement.css';
import Nav from '../Nav/Nav';

const Measurement = () => {
    return(
        <div className="measurement-container"> 
            <Nav />

            <div className="measure">
                <div className="measure-status">
                    <div className="result-measure-blood-pressure">
                        <p>122/81</p>
                    </div>
                    <div className="result-measure-pulse">
                        <p>86</p>
                    </div>
                </div>  
                <div className="result-measure-info">
                <p className="result-measure-description">Tętno w stanie spoczynku</p>
                    <p className="result-measure-date">06.01.2020 r. - 15:20</p>
                </div>
            </div>

            <div className="measure">
                <div className="measure-status" style={{backgroundColor: '#FFC91B'}}>
                    <div className="result-measure-blood-pressure">
                        <p>135/90</p>
                    </div>
                    <div className="result-measure-pulse">
                        <p>97</p>
                    </div>
                </div>  
                <div className="result-measure-info">
                    <p className="result-measure-description">Tętno podczas biegania</p>
                    <p className="result-measure-date">03.01.2020 r. - 08:30</p>
                </div>

            </div>

            <div className="measure">
                <div className="measure-status" style={{backgroundColor: '#FF2929'}}>
                    <div className="result-measure-blood-pressure">
                        <p>160/94</p>
                    </div>
                    <div className="result-measure-pulse">
                        <p>97</p>
                    </div>
                </div>
                <div className="result-measure-info">
                    <p className="result-measure-description">Przy dużym wysiłku</p>
                    <p className="result-measure-date">02.01.2020 r. - 11:32</p>
                </div>  
            </div>

            
        </div>
    );
}

export default Measurement