import {FETCH_NEWS} from "./types";
import axiox from 'axios';

// DAO
// dispatch(fetchNews('')) => action={type:FETCH_NEWS, payload:news.data}
// dispatch 호출하면 action에 값을 채워서  reducer 함수를 자동 호출하여 값을 넘겨준다
export const fetchNews=(fd)=>dispatch=>{
    axiox.get('http://localhost:3355/news',{
        params:{
            fd:fd
        }
    }).then(news=>dispatch({
        type:FETCH_NEWS,
        payload:news.data
    }))
}
// ==> dispatch({type,payload}) => function(state,action)
// action={type,payload}