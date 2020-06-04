import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
// useDispatch => 데이터 요청
// useSelector => 요청한 데이터 얻기
import {FETCH_CATEGORY} from "../actions/types";
import axios from 'axios';
import {NavLink} from "react-router-dom";

export default function Home(props) {
    // dispatch : reducer를 연결해주는 함수 => action을 넘겨줌 {type,payload}
    const dispatch=useDispatch();

    useEffect(()=>{
        axios.get('http://localhost:3355/category').then((result)=>{
            dispatch({  // ==> export default function (state=initialState, action)
                type: FETCH_CATEGORY,
                payload: result.data
            })
        })
    },[])

    /*
          //  state => store에 저장된 state
          useSelector(function(state) {
              return state.foods.category;
          });
     */
    const cate_data=useSelector(state=>state.foods.category)

    /*
        data.map((m)=>
        )  ==> 리턴 포함

        블록{}이 열리면 return을 써줘야함
        data.map(function(m){
             return (
             )
        })

        data.map((m)=>{
             return (
             )
        })
     */
    const html=cate_data.map((m)=>
        <div className="col-md-3">
            <div className="panel panel-danger">
                <div className="panel-heading">
                    {m.title}<br/>
                    <sub>{m.subject}</sub>
                </div>
                <div className="panel-body">
                    <div className="thumbnail">
                        <NavLink to={"/cate_food/"+m.cateno}>
                            <img src={m.poster} alt="Lights" style={{"width":"100%"}}/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div className={"row"} style={{"width":"1600px","margin":"0px auto"}}>
            <h1>믿고 보는 맛집 리스트</h1>
            {html}
        </div>
    )
}