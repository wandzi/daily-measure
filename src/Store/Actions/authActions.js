import firebase from '../../Config/firebaseConfig';

export const signIn = (credentials) => {
 return (dispatch, getState) => {
  firebase.auth().signInWithEmailAndPassword(
   credentials.email,
   credentials.password
  )
  .then(() => {
   dispatch({ type: 'LOGIN_SUCCESS' })
  })
  .catch((err) => {
   dispatch({ type: 'LOGIN_ERROR', err })
  })
  }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGN_OUT' });
        })
    }
}