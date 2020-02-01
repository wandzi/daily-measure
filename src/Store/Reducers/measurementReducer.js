const initState = {
    measurement: [
        {id: '1', systolic: '120', diastolic: '80', pulse: '90', description: 'W stanie spoczynku 1', day: '2', month: '3', year:'2020', hour: '12', minutes: '23'},
        {id: '2', systolic: '130', diastolic: '87', pulse: '90', description: 'W stanie spoczynku 2', day: '2', month: '3', year:'2020', hour: '12', minutes: '23'},
        {id: '3', systolic: '112', diastolic: '78', pulse: '90', description: 'W stanie spoczynku 3', day: '2', month: '3', year:'2020', hour: '12', minutes: '23'},

    ]
}

const measurementReducer = (state = initState, action) => {
    return state
}   

export default measurementReducer