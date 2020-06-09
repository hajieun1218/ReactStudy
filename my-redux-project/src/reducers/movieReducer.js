import {FETCH_LOOKUP, FETCH_MOVIE_NEWS} from "../actions/types";

const initialState={
    news:[],
    lookup:[]
}

export default function (state=initialState,action) {
    switch (action.type) {
        case FETCH_MOVIE_NEWS:
            return {
                ...state,
                news: action.payload
            }
        case FETCH_LOOKUP:
            return {
                ...state,
                lookup: action.payload
            }
        default:
            return state;
    }
}