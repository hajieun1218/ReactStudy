import React,{Component,Fragment} from "react";

// 생명주기
// props => name={"홍길동"} sex={"남자"} age={"30"} 를 받는다
// props => 불변
// state => 수시로 바뀌는 변수를 받을때는 state 사용해야함 (ex.페이지)
// setState 호출 => render가 호출되어서 바뀐 내용으로 출력
// 서버에서 받는 값은 속성값이 아니므로 props로 받지 못한다. state로 받아야함
/*
    this.state={
        page:1,
        data:[],
        detail:{}
    }

    constructor => componentWillMount => render => componentDidMount
        (ㄴ> 이벤트 발생(페이지 클릭) => setState() => render()를 다시 호출)
             setState() : 데이터 변경 시 화면에 출력 (re-rendering())
 */
export default class App3 extends Component{
    constructor(props) {
        super(props);
        console.log("constructor(props)"); // System.out.println()
        /*
            생성자 함수
                없는 경우에는 자동 생성
                멤버변수 선언할 때 사용 this.state=
                이벤트 등록할 때 사용 
         */
        this.state={
            name:''
        }
        
        // 이벤트 등록
        this.nameChange=this.nameChange.bind(this);
    }

    nameChange(e) {
        console.log("nameChange Call..")
        this.setState({name:e.target.value}); // render() 다시 호출
        //this.state.name=e.target.value; => 이렇게 하면 render()를 호출하지 못함
    }

    componentWillMount() {
        // Mount가 되기 전에 수행하는 함수 (메모리에 올리기 전)
        // Mount => 메모리에 올리는 것
        // 외부 서버에서 데이터를 읽어온다
        console.log("componentWillMount() Call...");
    }

    componentDidMount() {
        // 완료
        // window.onload() ==> $(function(){})
        // jquery를 사용할 때는 componentDidMount()에서 사용해야함
        // 다른 프레임워크와 연결할 때 사용 (Jquery, AngularJS, ...)
        console.log("componentDidMount() Call...");
    }

    // 읽은 데이터를 화면에 출력
    /*
        화면에 출력 => HTML 이용한다
        HTML => JSX(JavaScript+XML)을 주로 이용한다
        ML => 태그형식 <태그명 속성="">
              =======
              1) 여는 태그 <table>
              2) 닫는 태그 </table>
              3) 단독 태그 <br/> <img/> <input/> ...

        JSX의 문법
            1. 반드시 전체를 포함하는 태그를 필요로 한다 (최상위 태그)
                예)
                    <div>aaa</div>
                    <div>bbb</div>   ===> Error
                            
                    <div>    => <div> 대신 <Fragment> :태그는 생성하지 않지만 트리는 만들어줌
                        <div>aaa</div>
                        <div>bbb</div>                                                
                    </div>
            2. HTML태그는 반드시 소문자로만 사용
               <div>     /  <Div>(X) <DIV>(X) => 사용자 태그로 인식
            3. 속상값을 입력할때는 반드시 ""
               <input type="text">
            4. 속성 중에 class => className
                        style={{"width":"200px","height":"150px"}}  => 괄호 두개
                        style={{"font-size":"10pt"}} (X)  back-ground(X)
                        style={{"fontSize":"10pt"}} (O)   backGround(O)
            5. 여는 태그와 닫는 태그가 일치
               <a><b><c></b></c></a> (X)
               <a><b><c></c></b></a> (O)
            6. rowspan => rowSpan, colspan=> colSpan
            7. 이벤트 처리
               onclick      => onClick
               onchange     => onChange
               onkey        => onKey
               onmouseover  => onMouseOver


               render() {
                   return (
                       {/* 주석 * /}
                   )
               }
     */
    render() {
        console.log("render() Call...");
        return (
            /*<div>
                이름:<input type={"text"} className={"input-sm"} size={"20"}
                          onChange={this.nameChange}
                />
                <h1>{this.state.name}</h1>
            </div>*/

            <div className="col-md-4">
                <div className="thumbnail">
                    <a href="/w3images/lights.jpg">
                        <img src="/w3images/lights.jpg" alt="Lights" style={{"width":"100%"}}/>
                            <div className="caption">
                                <p>Lorem ipsum...</p>
                            </div>
                    </a>
                </div>
            </div>
        )
    }
}