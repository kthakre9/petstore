import fetch from 'isomorphic-fetch';

export const REQUEST_API = 'REQUEST_API';
export const RECEIVE_API = 'RECEIVE_API';


export function requestApi () {
    return {
        type: REQUEST_API
    };
}

export function receiveApi (payload) {
    return {
        type: RECEIVE_API,
        payload: Object.assign(payload)
    };
}

export function fetchApi () {
    return dispatch => {
        dispatch(requestApi());

        fetch("/api/pets")
            .then( (response) => {
                return response.json();
        })
        .then(json => dispatch(receiveApi(json)));

    };
}
