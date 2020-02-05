const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authError: null
            }
        case 'LOGIN_ERROR':
            return {
                ...state, 
                authError: 'Login failed'
            }
        case 'SIGN_UP_SUCCESS':
            return {
                ...state,
                authError: null
            }
        case 'SIGN_UP_ERROR':
            return {
                ...state, 
                authError: action.error.message
            }
        case 'SIGN_OUT':
            return state;
        default: 
            return state;
    }
}   

export default authReducer