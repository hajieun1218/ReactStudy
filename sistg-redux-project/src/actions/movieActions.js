import React from "react";
import {FETCH_MOVIE, FETCH_DETAIL, FETCH_NEWS ,FETCH_POP} from "./types";
import axios from 'axios';

// fetchMovie(1,1)
/*
                                                   reducers(state에 저장)
                                                   (화면을 바꾸려면 setState()호출 => render())
    React(화면) =============> 액션 함수 호출  =====> 처리된 내용을 저장
               이벤트 발생(액션)
               (메뉴,버튼,값 입력)


     React ============> Reducer ================> React
            dispatch               state(구독)

     JSP =============> Model(@Controller) ========> JSP
         DispatcherServlet
                                         request(model)=>jsp
                                         ViewResolver(JSP에 request전송)
 */
export const fetchMovie=(page,type)=>dispatch=>{
    axios.get('http://localhost:3355/movie_data',{
        params:{
            page:page,
            type:type
        }
    }).then(movies=>dispatch({
        type:FETCH_MOVIE,
        payload:movies.data
    }))
}

export const fetchDetail=(no)=>dispatch=>{
    axios.get('http://localhost:3355/movie_detail',{
        params:{
            no:no
        }
    }).then(movies=>dispatch({
        type:FETCH_DETAIL, // @RequestMapping("FETCH_DETAIL")
        payload:movies.data[0] // [{}] 배열로 들어옴 => [0]
    }))
}

/*
    function fetchNews(fd) {
        dispatch() {
        }
    }
 */
export const fetchNews=()=>dispatch=>{
    axios.get('http://localhost:3355/movie_news').then(news=>dispatch({
        type:FETCH_NEWS,
        payload:news.data
    }))
}

export const fetchPop=()=>dispatch=>{
    axios.get('http://localhost:3355/movie_news').then(pop=>dispatch({
        type:FETCH_POP,
        payload:pop.data
    }))
}