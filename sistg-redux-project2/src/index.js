import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';  ==> 얘네가 사용하는 webpack을 쓰지 않겠다
import {Provider} from "react-redux";
import store from "./store/store";

// Provider : App한테 store를 넘겨주면 App가 모든 데이터를 공유
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
