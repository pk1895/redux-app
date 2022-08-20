import { getUser } from './serviceCall'
import { call, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../type/userType";
import { setUser } from "../action/userAction"

function* getUserSaga(action) {
    try {
        const response = yield call(getUser);
        const { data } = response;

        yield put(setUser(data));
    }
    catch (err) {
        console.log(err);
    }
}

export function* watcherGetUserSaga() {
    yield takeLatest(actionTypes.GET_USER, getUserSaga);
}
