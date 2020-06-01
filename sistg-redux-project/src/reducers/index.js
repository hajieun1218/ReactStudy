import {combineReducers} from "redux";
import movieReducer from "./movieReducer";
export default combineReducers({
    //  VO 등록
    movies: movieReducer
})
