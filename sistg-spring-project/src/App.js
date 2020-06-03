import React,{useEffect,useState} from 'react';
import axios from 'axios';
// useEffect : 스프링 연결
// useState : 가져온 데이터 저장
/*
      $('#btn').click(function(){
      ));

      function a(){}
      $('#btn').click(a())
 */
function App() {
  const [food,setFood]=useState([])
  useEffect(()=>{
    axios.get('http://211.238.142.186:8079/web/category.do').then((result)=>{
      setFood(result.data)
    })
  },[])
  // componentDidMount 올려놓고, componentDidUpdate 감시 => deps 쓰지 않는다
  // componentDidMount => 올려놓고 감시는 안하려면 deps 사용

  const html=food.map((m,key)=>
    <li key={key}>{m.title}-{m.subject}</li>
  )

  return (
    <ul>
      {html}
    </ul>
  );
}

export default App;
