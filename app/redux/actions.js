import fetch from "isomorphic-fetch";

export const REQUEST_PETS = "REQUEST_PETS";
export const RECEIVE_PETS = "RECEIVE_PETS";

export const GETPETBYID = "GETPETBYID";
export const RECEIVEPETBYID = "RECEIVEPETBYID";

export const REQUEST_LOGIN = "REQUEST_LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const REQUEST_LOGOUT = "REQUEST_LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

function requestLogin(payload) {
    return {
        type: REQUEST_LOGIN,
        isFetching: true,
        isAuthenticated: false,
        payload
    };
}

function receiveLogin(payload) {
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        id_token: payload
    };
}

function loginError(payload) {
    return {
        type: LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        payload
    };
}

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
            .then(json => dispatch(receivePetbyId(json)));
    };
}

export function fetchLogin(user){
    return dispatch => {
        dispatch(requestLogin(user));

        let requestOpts = {};
        requestOpts.url = "/api/Users/login";
        let form = JSON.stringify({
            username: user.username,
            password: user.password
        });

        return fetch(requestOpts.url, {
            credentials: "include",
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: form
        })
            .then(response =>
                response.json().then(user => ({ user, response }))
            ).then(({ user, response }) =>  {
                if (!response.ok) {
                    dispatch(loginError(user.message));
                    return Promise.reject(user);
                } else {
                    localStorage.setItem("id_token", user.id);
                    dispatch(receiveLogin(user.id));
                }
            }).catch(err => console.log("Error: ", err));
    };
}

function requestLogout() {
    return {
        type: REQUEST_LOGOUT,
        isFetching: true,
        isAuthenticated: true
    };
}

function receiveLogout() {
    return {
        type: LOGOUT_SUCCESS,
        isFetching: false,
        isAuthenticated: false
    };
}

export function logoutUser() {
    return dispatch => {
        dispatch(requestLogout());
        localStorage.removeItem("id_token");
        dispatch(receiveLogout());
    };
}
