import authReducer from './authReducer';
import measurementReducer from './measurementReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    measurement: measurementReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer