import React, { Component } from 'react';
import './Dashboard.css';
import LastMeasureResult from '../LastMeasureResult/LastMeasureResult'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    render() {
        const { projects, auth, profile } = this.props
        if (!auth.uid) return <Redirect to="/"/>
        console.log(this.props);
        return(   
            <div className="dashboard">
                <img src="./img/me.png" alt="logo" className="my-photo"/>
                <h1>Welcome, {profile.firstName}</h1>
                <LastMeasureResult projects={projects}/>
            </div>
        );
    }
    
}

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        profile: state.firebase.profile,
        auth: state.firebase.auth,
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'measurement'}
    ])
)(Dashboard)