import authReducer from './authReducer';
import measurementReducer from './measurementReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    measurement: measurementReducer,
    firestore: firestoreReducer
})

export default rootReducer