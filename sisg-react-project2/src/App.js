import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Chef from './components/Chef'
import Recipe from './components/Recipe'
import RecipeNews from './components/RecipeNews'
import RecipeRecommand from './components/RecipeRecommand'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
// Route: 화면, Router :화면 관리, Switch: 화면 찾아서 바꿔주는거

function App() {
  return (
      <Router>
        <Header/>
        <div className={"container-fluid"}>
            <div className={"jumbotron"}>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route path={"/recipe"} component={Recipe}/>
                    <Route path={"/chef"} component={Chef}/>
                    <Route path={"/recommand"} component={RecipeRecommand}/>
                    <Route path={"/news"} component={RecipeNews}/>
                </Switch>
            </div>
        </div>
      </Router>
  );
}

export default App;
