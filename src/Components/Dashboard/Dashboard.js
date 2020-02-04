import React, { Component } from 'react';
import './Dashboard.css';
import LastMeasureResult from '../LastMeasureResult/LastMeasureResult'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';



class Dashboard extends Component {
    render() {
        const { projects, auth } = this.props
        if (!auth.uid) return <Redirect to="/"/>
        return(   
            <div className="dashboard">
                <img src="./img/me.png" alt="logo" className="my-photo"/>
                <h1>Welcome, Mateusz</h1>
                <LastMeasureResult projects={projects}/>
            </div>
        );
    }
    
}

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'measurement' }
    ])
)(Dashboard)