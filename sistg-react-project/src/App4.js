import React,{Component} from "react";
import axios from 'axios';

// [] => List (Array)  ==> Movie
// {} => VO   (Object) ==> m
class App4 extends Component {
    // <App4 movie={movie}/> => 자동으로 props에 값을 채워준다
    // 이벤트 등록, state변수를 설정
    constructor(props) {
        super(props);
        
        // 클릭할 때마다 영화 하나의 상세정보를 받아서 MovieDetail 클래스로 넘기기 위한 변수
        this.state={
            detail:{},
            show:false,
            movie:[]  // json파일 읽어와서 movie에 저장
                      // constructor()는 데이터를 받는 부분이 아니라 변수를 설정하는 함수이기 때문에 movie데이터는 componentWillMount()에서 받는다
        }
    }
    // 이벤트 (클릭)
    onMovieChange(m) {
        // 클릭할때마다 render()를 다시 호출해야한다
        // MovieDetail의 render()를 출력하는 것이 아니라 App4의 render()를 다시 호출해서 전체를 출력해야한다
        // setState : 새로운 데이터를 다시 출력
        this.setState({detail:m,show:true})
    }

    // render()가 호출되기 전에 movie 데이터를 읽어와야한다
    componentWillMount() {
        // 필요한 데이터를 읽어온다 => state
        // http://localhost:3000/ => public
        axios.get('http://localhost:3000/weekly.json').then((result)=>{
            this.setState({movie:result.data})
        })
    }

    // 화면 출력
    render() {
        // HTML 구현
        // m: {} 블록 하나
        // movie : ArrayList, m : VO
        const html=this.state.movie.map((m,key)=>
            <div className="col-md-4" onClick={this.onMovieChange.bind(this,m)}>   {/* bind: 클릭할때마다 값을 바꿔서 저장*/}
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
                <div className={"col-sm-8"}>
                    {html}
                </div>
                <div className={"col-sm-4"}>
                    {this.state.show===true?<MovieDetail movie={this.state.detail}/>:null}
                </div>
            </div>
        )
    }
}

class MovieDetail extends Component {
    // constructor()를 안써도 자동으로  props값을 받아온다

    render() {
        return (
            <table className={"table"}>
                <tr>
                    <td rowSpan={"5"} width={"30%"} className={"text-center"}>
                        <img src={this.props.movie.poster} width={"100%"}/>
                    </td>
                    <td width={"70%"}>
                        <b>{this.props.movie.title}</b>
                    </td>
                </tr>
                <tr>
                    <td>감독 : {this.props.movie.director}</td>
                </tr>
                <tr>
                    <td>출연 : {this.props.movie.actor}</td>
                </tr>
                <tr>
                    <td>평점 : {this.props.movie.score}</td>
                </tr>
                <tr>
                    <td>장르 : {this.props.movie.genre}</td>
                </tr>
                <tr>
                    <td colSpan={"2"}>
                        {this.props.movie.story}
                    </td>
                </tr>
            </table>
        )
    }
}
export default App4;