const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            console.log('login success!!!!');
            return {
                ...state,
                authError: null
            }
        case 'LOGIN_ERROR':
            console.log('login error');
            return {
                ...state, 
                authError: 'Login failed'
            }
        case 'SIGN_UP_SUCCESS':
            console.log('sign up success')
            return {
                ...state,
                authError: null
            }
        case 'SIGN_UP_ERROR':
            console.log('signup error');
            return {
                ...state, 
                authError: action.error.message
            }
        case 'SIGN_OUT':
            console.log('signout success');
            return state;
        default: 
            return state;
    }
}   

export default authReducer