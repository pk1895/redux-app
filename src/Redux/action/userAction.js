import * as actionTypes from "../type/userType"

export const getUser = () => {

    const action = {
        type: actionTypes.GET_USER
    }
    return action;
}

export const setUser = (payload) => {
    const action = {
        type: actionTypes.SET_USER,
        users: payload
    }
    return action;
}