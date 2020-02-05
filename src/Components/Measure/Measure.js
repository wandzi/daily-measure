import React from 'react';
import './Measure.css';


const Measure = ({measure}) =>{

    let backgrounColor = null;

    if(measure.systolic > 70 && measure.systolic <= 90) {
        backgrounColor={backgroundColor: `#1D90C5`};
    } else if (measure.systolic > 90 && measure.systolic <= 120) {
        backgrounColor={backgroundColor: `#33AF1A`};
    } else if (measure.systolic > 120 && measure.systolic <= 140) {
        backgrounColor={backgroundColor: `#FFC91B`};
    } else if (measure.systolic > 140) {
        backgrounColor={backgroundColor: `#FF2929`};
    }

    return(
        <div className="measure">
            <div className='measure-status' style={backgrounColor}>
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