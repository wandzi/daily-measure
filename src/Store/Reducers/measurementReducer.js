const initState = {}

const measurementReducer = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_MEASURE':
            return state
        case 'ADD_MEASURE_ERROR':
            break;
        default:
            return state;
    }
}   

export default measurementReducer