import React,{useState,useEffect,useCallback} from "react";
// useEffect : 서버에서 파일을 읽어온다
// useState : 읽어온 파일을 저장
import axios from 'axios';
import {NavLink} from "react-router-dom";

export default function Recipe(props) {
    const [recipe,setRecipe]=useState([]);
    const [page,setPage]=useState(1);
    const [total,setTotal]=useState(0);


    // ?page=1
    // componentWillMount()
    // 함수 안에서 함수를 만들 수 있게 해준 것이 useEffect
    useEffect(()=>{
        axios.get('http://localhost:3355/recipe_data',{
            params:{
                page:page
            }
        }).then((result)=>{
            setRecipe(result.data);  // 받아온 값을 recipe에 저장
            // set메소드를 호출하면 데이터가 바뀔때마다 return()을 다시 호출하여 변경된 내용 출력
        })
    },[recipe])  // 내용이 갱신될때만 수행

    useEffect(()=>{
        axios.get('http://localhost:3355/total_data').then((result)=>{
            setTotal(result.data.total);
        })
    },[total])



    // 이벤트 처리
    const onPrev=(()=> {
        setPage(page>1?page-1:page);
        axios.get('http://localhost:3355/recipe_data',{
            params:{
                page:page
            }
        }).then((result)=>{
            setRecipe(result.data);  // 받아온 값을 recipe에 저장
            // set메소드를 호출하면 데이터가 바뀔때마다 return()을 다시 호출하여 변경된 내용 출력
        })
    }) // 다른 페이지를 눌렀을때만
    const onNext=(()=> {
        setPage(page<total?page+1:page);
        axios.get('http://localhost:3355/recipe_data',{
            params:{
                page:page
            }
        }).then((result)=>{
            setRecipe(result.data);  // 받아온 값을 recipe에 저장
            // set메소드를 호출하면 데이터가 바뀔때마다 return()을 다시 호출하여 변경된 내용 출력
        })
    })



    // render()
    const html=recipe.map((m)=>
        <div className="col-md-3">
            <div className="thumbnail">
                <NavLink to={"/detail/"+m.no}>
                    <img src={m.poster} alt="Lights" style={{"width":"100%"}}/>
                </NavLink>
                <div className="caption">
                    <p style={{"fontSize":"9pt"}}>{m.title}</p>
                    <sub style={{"color":"gray"}}></sub>
                </div>
            </div>
        </div>
    )
    return (
        <React.Fragment>
            <div className={"row"}>
                {html}
            </div>
            <div className={"row text-center"}>
                <button className={"btn btn-md btn-primary"} onClick={onPrev}>이전</button>
                {page} page / {total} pages
                <button className={"btn btn-md btn-danger"} onClick={onNext}>다음</button>
            </div>
        </React.Fragment>
    )
}