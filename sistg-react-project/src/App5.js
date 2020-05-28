import React,{useState,useEffect} from "react"; // useState: state,  useEffect: componentWillMount()  ==> Hooks
import axios from 'axios';

// 계속 호출해줌
const H=()=>{
    const color=['red','pink','green','blue','yellow']
    const no=parseInt(Math.random()*5);
    return (
        <h1 className={"text-center"} style={{"color":color[no]}}>주간 박스오피스</h1>
    )
}
// 실행한 정보를 기억하고있다가 return해줌 ==> 최적화 프로그램 (자바에서 싱글턴)
const H1=React.memo(()=> {
    const color=['red','pink','green','blue','yellow']
    const no=parseInt(Math.random()*5);
    return (
        <h1 className={"text-center"} style={{"color":color[no]}}>주간 박스오피스</h1>
    )
})
// 16.08 버전부터
// 함수 function 에는 this가 없음 => state가 없음, render()만 존재
// <App5 movie={movie} />
function App5(props) {
    /*var movie=[];
    axios.get('http://localhost:3000/weekly.json').then((result)=>{
        movie=[...result.data]; // 스프레드 연산자 (복사)
        console.log(movie);
    })*/ // ===> 이렇게 하면 값을 받아오지 못함

    // [[[
    // function에서 state를 사용할 수 있게 제작 ==> useXxx => Hooks
    // setMovie에 값을 채우고 movie로 불러서 사용 => 캡슐화
    // [변수, setter]
    const [movie,setMovie]=useState([]);
    const [detail,setDetail]=useState({});
    const [show,setShow]=useState(false);
    /*
        this.state={
            detail:{},
            show:false,
            movie:[]
        }
     */

    // componentWillMount, componentDidMount => 변경한 Hooks
    useEffect(()=>{
        axios.get('http://localhost:3000/weekly.json').then((result)=>{
            setMovie(result.data)
        })
    })
    // ]]] ==> 이 부분을 파일로 빼놓고, import로 불러와서 전역변수로 사용 => Redux

    const onMovieChange=(m)=>{
        setDetail(m);
        setShow(true);
        // this.setState({detail:m,show:true})
    }
    const html=movie.map((m,key)=>
        <div className="col-md-4" onClick={()=>onMovieChange(m)}>
            <div className="thumbnail">
                <img src={m.poster} alt="Lights" style={{"width":"100%"}}/>
                <div className="caption">
                    <p>{m.title}</p>
                </div>
            </div>
        </div>
    )
    return (
        <div className={"row"}>
            <H1 />
            <div className={"col-sm-8"}>
                {html}
            </div>
            <div className={"col-sm-4"}>
                {show===true?<MovieDetail movie={detail} />:null}
            </div>
        </div>
    )
}

function MovieDetail(props) {
    return (
        <table className={"table"}>
            <tr>
                <td rowSpan={"5"} width={"30%"} className={"text-center"}>
                    <img src={props.movie.poster} width={"100%"}/>
                </td>
                <td width={"70%"}>
                    <b>{props.movie.title}</b>
                </td>
            </tr>
            <tr>
                <td>감독 : {props.movie.director}</td>
            </tr>
            <tr>
                <td>출연 : {props.movie.actor}</td>
            </tr>
            <tr>
                <td>평점 : {props.movie.score}</td>
            </tr>
            <tr>
                <td>장르 : {props.movie.genre}</td>
            </tr>
            <tr>
                <td colSpan={"2"}>
                    {props.movie.story}
                </td>
            </tr>
        </table>
    )
}


export default App5;