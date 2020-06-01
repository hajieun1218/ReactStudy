import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {fetchMovie} from "../actions/movieActions";
import {NavLink} from "react-router-dom";

// state를 props로 변경하지 않고 사용하는 방법
// useSelector로 값을 받아옴

function MovieReal2(props) {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchMovie(1,1));
    },[])
    const data=useSelector(state=>state.movies.movie);

    const html=data.map((m)=>
        <div className="col-md-4">
            <div className="thumbnail">
                <NavLink to={"/movie_detail/"+m.no}>
                    <img src={m.poster} alt="Lights" style={{"width":"100%"}}/>
                </NavLink>
                <div className="caption">
                    <p>{m.title}</p>
                </div>
            </div>
        </div>
    )

    return(
        <div className={"row"}>
            <h2 className={"text-center"}>현재상영영화</h2>
            <p>
                <NavLink to={"/movie_news"} className={"btn btn-sm btn-danger"}>영화뉴스</NavLink>
                <NavLink to={"/movie_pop"} className={"btn btn-sm btn-warning"}>영화뉴스POP</NavLink>
            </p>
            {html}
        </div>
    )
}

export default MovieReal2;