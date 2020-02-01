import React from 'react';
import './Measure.css';


const Measure = ({measure}) =>{
    return(
        <div className="measure">
            <div className="measure-status" style={{backgroundColor: '#FFC91BFF2929'}}>
                <div className="result-measure-blood-pressure">
                    <p>{measure.systolic}/{measure.diastolic}</p>
                </div>
                <div className="result-measure-pulse">
                    <p>{measure.pulse}</p>
                </div>
            </div>  
            <div className="result-measure-info">
            <p className="result-measure-description">{measure.description}</p>
                <p className="result-measure-date">{measure.date}</p>
            </div>
        </div>     
    )
}

export default Measure