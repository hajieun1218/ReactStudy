import React,{useState,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {fetchlookup} from "../actions/movieActions";
import {NavLink} from "react-router-dom";

export default function Loopup(props) {
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
                <NavLink to={"/moviedetail/"+m.mno}>
                    <img src={m.poster} alt="" style={{"width":"200px","height":"250px"}}/>
                </NavLink>
                <p><strong>{m.title}</strong></p>
                <p>감독: {m.director}</p>
                <p>출연: {m.actor}</p>
            </div>
        </div>
    )
    return (
        <React.Fragment>
            <div className={"row"} style={{"margin":"0px auto","width":"1000px"}}>
                {html}
            </div>
            <div className={"row text-center"} style={{"margin":"0px auto","width":"1000px"}}>
                <NavLink to={""} className={"btn btn-sm"}>이전</NavLink>
                <NavLink to={""} className={"btn btn-sm"}>다음</NavLink>
            </div>
        </React.Fragment>
    )
}