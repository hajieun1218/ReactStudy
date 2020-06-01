import {FETCH_MOVIE, FETCH_DETAIL, FETCH_NEWS, FETCH_POP} from "../actions/types";

// VO
const initialState={
    movie:[],
    detail:{},
    news:[],
    pop:[]
}

/*
    스프레드 연산자 (...)
    const a=[1,2,3];
    const b=[...a] => b=[1,2,3]
    const c=[4,5,...a] => c=[4,5,1,2,3]
 */
export default function(state=initialState, action){
    switch (action.type) {
        case FETCH_MOVIE:
            return {
                ...state,
                movie: action.payload
            }
        case FETCH_DETAIL:
            return {
                ...state,
                detail:action.payload
            }
        case FETCH_NEWS:
            return {
                ...state,
                news:action.payload
            }
        case FETCH_POP:
            return {
                ...state,
                pop:action.payload
            }
        default:
            return state;
    }
}