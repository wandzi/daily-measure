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

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((response) => {
            return firestore.collection('users').doc(response.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName
            })
        }).then(() => {
            dispatch({ type: 'SIGN_UP_SUCCESS'})
        }).catch( (error) => {
            dispatch({ type: 'SIGN_UP_ERROR', error})
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGN_OUT' });
        })
    }
}