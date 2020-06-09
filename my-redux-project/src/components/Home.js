import React,{useState,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {FETCH_LOOKUP} from "../actions/types";
import axios from 'axios';
import {fetchlookup} from "../actions/movieActions";

export default function Home(props) {
    const dispatch=useDispatch();
    const [page,setPage]=useState(1);
    const [type,setType]=useState(1);

    useEffect(()=>{
        dispatch(fetchlookup(page,type))
    },[])

    const list_data=useSelector(state=>state.movies.lookup)

    const html=list_data.map((m)=>
        <div className="col-sm-4">
            <div className="thumbnail">
                <img src={m.poster} alt=""/>
                <p><strong>{m.title}</strong></p>
                <p>감독: {m.director}</p>
                <p>출연: {m.actor}</p>
            </div>
        </div>
    )
    return (
        <div className={"row"} style={{"margin":"0px auto","width":"1000px"}}>
            <tbody>
                {html}
            </tbody>
        </div>
    )
}