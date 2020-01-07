import React from 'react';
import './Dashboard.css';
import LastMeasureResult from '../LastMeasureResult/LastMeasureResult'

const Dashboard = () => {
    return(   
        <div className="dashboard">
            <img src="./img/me.png" alt="logo" className="my-photo"/>
            <h1>Welcome, Mateusz</h1>
            <LastMeasureResult/>
        </div>
    );
}

export default Dashboard