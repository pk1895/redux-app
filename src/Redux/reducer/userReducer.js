import React from "react";
import * as actionTypes from "../type/userType";

const initialState = {
    users: []
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                users: action.payload


            }
        default: return state;
    }
}

export default userReducer;