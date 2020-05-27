import React,{Component,Fragment} from "react";  // React의 시작점

/*
    React => 화면 UI (HTML) => render()
            ===============
            JSX (JavaScript + XML) => ES6
            화면 => class 기반, function 기반 (function기반을 선호함, 단점 : 지역변수 => 값 넘기기가 어렵다 => Hooks를 공부해야함)

    React 알아야할 것
        JSX, 가상돔,
        class기반, function기반
        Hooks
        Redux
        Mobx, Saga

    React    Redux    Mobx(Saga)
    =====    =====    ==========
     JSP      MVC       Spring

     XML 문법
        = 클래스명, 함수명 => class App, function App2
                            ========   ============
                             <App />     <App2 />    ==> 태그형식으로 호출해야한다
             1. HTML 태그와 사용자 정의 태그를 구분해야한다
                =========  ==============
               반드시 소문자    첫자만 대문자

      <ul>
         <li>Java1</li>
         <li>Java2</li>
         <li>Java3</li>
      </ul>

      -===> render()
      render{
          return (
              <ul>
                 <li>Java1</li>
                 <li>Java2</li>
                 <li>Java3</li>
              </ul>
          )
      }

      ReactDOM.render()  -> ReactDOM : 가상 메모리 (태그형태를 트리형태로 만들어라)
        => XML 형태 => HTML로 전환
           React.createElement('ul',null,
               React.createElement('li',null,'Java1'),
               React.createElement('li',null,'Java2'),
               React.createElement('li',null,'Java3')
           )
           ==> 가상 메모리에 올라간다
 */

// ${} {} => 변수 출력
// 전체를 감쌀 수 있는 최상위 태그가 있어야함
// Fragment : 가상 root를 만드는 태그명
// return() 안에서는 if문이나 for문 사용할 수 없다 => 삼항연산자, map은 사용 가능
class App2 extends Component{
    render() {
        return (
            /*<Fragment>
                {/!* Fragment는 임시 루트를 만드는 태그명 *!/}
                <div className={"row"}>
                    <h1 className={"text-center"}>React 연습</h1>
                </div>
                <div className={"row"}>
                    <h1 className={"text-center"}>React 연습</h1>
                </div>
            </Fragment>*/

           /* <ul>
                <li>Java1</li>
                <li>Java2</li>
                <li>Java3</li>
            </ul>*/

            React.createElement('ul',null,
                React.createElement('li',null,'Java1'),
                React.createElement('li',null,'Java2'),
                React.createElement('li',null,'Java3')
            )
        )
    }

}

export default App2;