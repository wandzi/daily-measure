export const addMeasure = (measure) => {
    return (dispatch, getState) => {
        // async to DB
        dispatch({type: 'ADD_MEASURE', measure});
    }
};