import authReducer from './authReducer';
import measurementReducer from './measurementReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    measurement: measurementReducer
})

export default rootReducer