import {combineReducers} from "redux";
import * as ActionTypes from "./actions";


function pets (state = {
    pets
}, action){
    switch (action.type) {
    case ActionTypes.RECEIVE_PETS:
        return Object.assign({}, state, action.payload);

    case ActionTypes.REQUEST_PETS:
        return Object.assign({}, state, action.payload);

    case ActionTypes.GETPETBYID:
        return Object.assign({}, state, action.payload);

    case ActionTypes.RECEIVEPETBYID:
        return Object.assign({}, state, action.payload);

    default:
        return state;
    }

}

function login(state = {
    isFetching: false,
    isAuthenticated: !!localStorage.getItem("id_token")
}, action) {
    switch (action.type) {
    case ActionTypes.REQUEST_LOGIN:
        return Object.assign({}, state, {
            isFetching: true,
            isAuthenticated: false,
            user: action.payload
        });
    case ActionTypes.LOGIN_SUCCESS:
        return Object.assign({}, state, {
            isFetching: false,
            isAuthenticated: true,
            errorMessage: ""
        });
    case ActionTypes.LOGIN_FAILURE:
        return Object.assign({}, state, {
            isFetching: false,
            isAuthenticated: false,
            errorMessage: action.message
        });
    case ActionTypes.LOGOUT_SUCCESS:
        return Object.assign({}, state, {
            isFetching: true,
            isAuthenticated: false
        });
    default:
        return state;
    }
}

const rootReducer = combineReducers({
    pets,
    login
});

export default rootReducer;
