import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    email: "",
    userName: "",
    password: "",
    profile: "",
    auth: ""
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.StudentSignupUser:
            return ({
                ...state,
                email: action.payload.email,
                userName: action.payload.userName,
                password: action.payload.password,
                profile: action.payload.profile,
                auth: action.payload.auth
            })
        case ActionTypes.StudentSigninUser:
            return ({
                ...state,
                userName: action.payload.userName,
                password: action.payload.password,
                profile: action.payload.profile,
                 auth: action.payload.auth
            })
            case ActionTypes.CompanySigninUser:
            return ({
                ...state,
                userName: action.payload.userName,
                password: action.payload.password,
                profile: action.payload.profile,
                 auth: action.payload.auth
                
            })
              case ActionTypes.SigninAdmin:
            return ({
                ...state,
                userName: action.payload.userName,
                password: action.payload.password,
                profile: action.payload.profile,
                 auth: action.payload.auth
                
            })
            case ActionTypes.SignOut:
            return ({
                ...state,
                userName: "",
                password: ""
            })
        default:
            return state;
    }

}