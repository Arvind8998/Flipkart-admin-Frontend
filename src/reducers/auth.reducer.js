import { authConstants } from "../actions/constants"

const initialState = {
    token : null, 
    user: {
        firstName: '',
        lastName: '',
        email: '',
        picture: ''
    },
    authenticate: false,
    authenticating: false
}

export const authReducer = (state = initialState,action)=>{
    console.log(action)
    switch(action.type){
        case authConstants.LOGIN_REQUEST:
            return {
                    ...state,
                    authenticating: true
                    }
        case authConstants.LOGIN_SUCCESS:
            return {
                    ...state,
                    user: action.payload.user,
                    token: action.payload.token,
                    authenticate: true,
                    authenticating: false
                    }
        default:
            return state
    }
}