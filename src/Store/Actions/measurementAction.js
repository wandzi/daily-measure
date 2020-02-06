export const addMeasure = (measure) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const authorId = getState().firebase.auth.uid;
        firestore.collection('measurement').add({
            ...measure,
            systolic: measure.systolic,
            diastolic: measure.diastolic,
            pulse: measure.pulse,
            description: measure.description,
            date: new Date(),
            uid: authorId,
        }).then(() => {
            dispatch({type: 'ADD_MEASURE', measure});
        }).catch((error) => {
            console.log(error);
        })
        
    }
};