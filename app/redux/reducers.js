import {combineReducers} from 'redux';
import * as ActionTypes from './actions';


function pets (state = {}, action){
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

const rootReducer = combineReducers({
    pets
});

export default rootReducer;
