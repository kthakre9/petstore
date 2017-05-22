import fetch from 'isomorphic-fetch';

export const REQUEST_PETS = 'REQUEST_PETS';
export const RECEIVE_PETS = 'RECEIVE_PETS';

export const GETPETBYID = 'GETPETBYID';
export const RECEIVEPETBYID = 'RECEIVEPETBYID';

export function requestPets () {
    return {
        type: REQUEST_PETS
    };
}

export function receivePets (payload) {
    return {
        type: RECEIVE_PETS,
        payload: Object.assign(payload)
    };
}

export function receivePetbyId (payload) {
    return {
        type: RECEIVEPETBYID,
        payload: Object.assign(payload)
    };
}

export function fetchPets () {
    return dispatch => {
        dispatch(requestPets());

        fetch("/api/pets")
            .then( (response) => {
                return response.json();
        })
        .then(json => dispatch(receivePets(json)));

    };
}

export function getPetbyId (petId) {
    return dispatch => {
        fetch(`/api/pets/${petId}`)
            .then((response) => {
                return response.json();
            })
            .then(json => dispatch(receivePetbyId(json)))
    }
}
