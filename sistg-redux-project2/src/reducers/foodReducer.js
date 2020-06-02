// 저장해야할 데이터
import {FETCH_NEWS} from "../actions/types";

const initialState={
    news:[],
    recipe:[],
    category:[],
    food:[],
    food_detail:{},
    recipe_detail:{},
    pop_food:[],
    recommend_food:[]
}

// request = state ==> state.news

export default function (state=initialState, action) {
    switch (action.type) {
        case FETCH_NEWS:
            return {
                ...state,
                news:action.payload
            }
        default:
            return state;
    }
}