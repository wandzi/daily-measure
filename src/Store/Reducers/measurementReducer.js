const initState = {
    measurement: [
        {id: '1', systolic: '120', diastolic: '80', pulse: '90', description: 'W stanie spoczynku 1', date: '1.02.2020, 10:53:47'},
        {id: '2', systolic: '130', diastolic: '87', pulse: '90', description: 'W stanie spoczynku 2', date: '31.12.2020, 13:53:47'},
        {id: '3', systolic: '112', diastolic: '78', pulse: '90', description: 'W stanie spoczynku 3', date: '30.12.2020, 13:53:47'},

    ]
}

const measurementReducer = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_MEASURE':
            console.log('added', action.measure);
            return state
        case 'ADD_MEASURE_ERROR':
            console.log('Add measure error', action.error);
            break;
        default:
            return state;
    }
}   

export default measurementReducer