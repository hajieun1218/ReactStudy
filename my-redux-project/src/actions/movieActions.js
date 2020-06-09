import {FETCH_LOOKUP, FETCH_MOVIE_NEWS} from "./types";
import axios from 'axios';

export const fetchNews=(fd)=>dispatch=>{
    axios.get('http://localhost:3355/news',{
        params:{
            fd:fd
        }
    }).then(news=>dispatch({
        type:FETCH_MOVIE_NEWS,
        payload:news.data
    }))
}

export const fetchlookup=(page,type)=>dispatch=>{
    axios.get('http://localhost:3355/movielist',{
        params:{
            page:page,
            type:type
        }
    }).then(lookup=>dispatch({
        type:FETCH_LOOKUP,
        payload:lookup.data
    }))
}