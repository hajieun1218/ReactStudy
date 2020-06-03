import {createStore,applyMiddleware,compose} from "redux";
// compose : 묶어서 한번에 동작(전체 store안에 middleware를 포함하여 동작시켜라)
import thunk from "redux-thunk";
// 비동기화
import rootReducer from '../reducers'
// index는 파일명을 안줘도 됨
import {createLogger} from "redux-logger/src";

const logger=createLogger();
const initialState={}

const middleware=[thunk,logger];

const store=createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store;
