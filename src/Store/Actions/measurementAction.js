export const addMeasure = (measure) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('measurement').add({
            ...measure,
            systolic: 444,
            diastolic: 444,
            pulse: 44,
            description: 'ASD KASK',
            date: new Date(),
        }).then(() => {
            dispatch({type: 'ADD_MEASURE', measure});
            
        }).catch((error) => {
            console.log(error);
        })
        
    }
};