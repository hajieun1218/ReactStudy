import {combineReducers} from "redux";
/*
     FoodReducer
     RecipeReducer    ===============>   combineReducer : 분산해서 한 작업을 한번에 묶어줌
     NewsReducer
 */
import foodReducer from "./foodReducer";

export default combineReducers({
    foods:foodReducer
})

