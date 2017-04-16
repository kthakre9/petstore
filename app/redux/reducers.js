import {combineReducers} from 'redux';
import * as ActionTypes from './actions';


function api (state = {}, action){
    switch (action.type) {
        case ActionTypes.RECEIVE_API:
            return Object.assign({}, state, action.payload);

        case ActionTypes.REQUEST_API:
            return Object.assign({}, state, action.payload);

        default:
            return state;
        }

    }

const rootReducer = combineReducers({
    api
});

export default rootReducer;
