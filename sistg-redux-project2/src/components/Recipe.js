import React,{useState,useEffect} from "react";
import {fetchRecipe} from "../actions/foodActions";
import {useDispatch,useSelector} from "react-redux";
/*
     useDispatch ==> Action을 연결해 주는 함수
     
     dispatch가 호출되면 =>
     export default function (state=initialState, action)  함수가 호출
     => action에 들어온 값으로 state 변경
 */
export default function Recipe(props) {
    // 지역변수
    const [page,setPage]=useState(1);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchRecipe(page))
    },[])
    const recipe_data=useSelector(state=>state.foods.recipe)

    const html=recipe_data.map((m)=>
        <div className="col-md-4">
            <div className="thumbnail">
                <img src={m.poster} alt="Lights" style={{"width":"100%"}}/>
                <div className="caption">
                    <p>{m.title}</p>
                </div>
            </div>
        </div>
    )
    return (
        <div className={"row"}>
            <h1 className={"text-center"}>레시피</h1>
            {html}
        </div>
    )
}