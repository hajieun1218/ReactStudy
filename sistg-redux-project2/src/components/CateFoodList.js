import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import axios from 'axios'
import {FETCH_CATE_FOOD} from "../actions/types";

export default function CateFoodList(props) {
    const dispatch=useDispatch();

    // cate_food/1 
    // component에서 component로 넘길때는 /1로 넘기고 서버로 넘길때는 ?cno=1로 넘긴다
    useEffect(()=>{
        axios.get('http://localhost:3355/cate_food',{
            params:{
                cno:props.match.params.cno
            }
        }).then((result)=>{
            dispatch({
                type: FETCH_CATE_FOOD,
                payload: result.data
            })
        })
    },[])

    const food_data=useSelector((state)=>state.foods.food)

    const html=food_data.map((m)=>
        <table className={"table"}>
            <tbody>
            <tr>
                <td width={"30%"} rowSpan={"3"} className={"text-center"}>
                    <img src={m.image.substring(0,m.image.indexOf(','))} width={"200"} height={"150"}/>
                </td>
                <td width={"70%"}>{m.title} <span style={{"color":"orange"}}>{m.score}</span></td>
            </tr>
            <tr>
                <td >주소: {m.address}</td>
            </tr>
            <tr>
                <td >전화: {m.tel}</td>
            </tr>
            </tbody>
        </table>
    )

    return (
        <div className={"row"} style={{"margin":"0px auto","width":"1000px"}}>
            <table className={"table"}>
                <tbody>
                <tr>
                    <td>{html}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}