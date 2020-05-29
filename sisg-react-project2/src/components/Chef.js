import React, {useCallback, useEffect, useState} from "react";
import axiox from 'axios';
import axios from "axios";

export default function Chef(props) {
    const [chef,setChef]=useState([]);
    const [page,setPage]=useState(1);
    const [total,setTotal]=useState(0);

    useEffect(()=>{
        axiox.get('http://localhost:3355/chef_data',{
            params:{
                page:page
            }
        }).then((res)=>{
            setChef(res.data);
        })
    })

    useEffect(()=>{
        axios.get('http://localhost:3355/chef_total').then((result)=>{
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
            setChef(result.data);  // 받아온 값을 chef에 저장
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
            setChef(result.data);  // 받아온 값을 chef에 저장
            // set메소드를 호출하면 데이터가 바뀔때마다 return()을 다시 호출하여 변경된 내용 출력
        })
    })



    const html=chef.map((m)=>
        <table className={"table"}>
            <tr>
                <td width={"30%"} rowSpan={"2"} className={"text-center"}>
                    <img src={m.poster} width={"70"} height={"70"} className={"img-circle"}/>
                </td>
                <td colSpan={"4"}><h4 style={{"color":"orange"}}>{m.chef}</h4></td>
            </tr>
            <tr>
                <td className={"text-center"}>
                    <img src={"/image/1.png"}/>{m.mem_cont1}
                </td>
                <td className={"text-center"}>
                    <img src={"/image/3.png"}/>{m.mem_cont3}
                </td>
                <td className={"text-center"}>
                    <img src={"/image/7.png"}/>{m.mem_cont7}
                </td>
                <td className={"text-center"}>
                    <img src={"/image/2.png"}/>{m.mem_cont2}
                </td>
            </tr>
        </table>
    )
    return (
        <div className={"row"} style={{"margin":"0px auto","width":"700px"}}>
            <table className={"table"}>
                <tr>
                    <td>
                        {html}
                    </td>
                </tr>
            </table>
            <div className={"row text-center"}>
                <button className={"btn btn-md btn-primary"} onClick={onPrev}>이전</button>
                {page} page / {total} pages
                <button className={"btn btn-md btn-danger"} onClick={onNext}>다음</button>
            </div>
        </div>
    )
}