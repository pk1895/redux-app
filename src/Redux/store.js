import { applyMiddleware, combineReducers, createStore } from "redux"
import createSagaMiddleware from "redux-saga";
import userReducer from "./reducer/userReducer";
import { watcherGetUserSaga } from "./saga/getUserSaga"

const reducer = combineReducers({
    userReducer

})

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));
sagaMiddleware.run(watcherGetUserSaga);

export default store;
