import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import POPFoodHouse from "./components/POPFoodHouse";
import RecommendFoodHouse from "./components/RecommendFoodHouse";
import Recipe from "./components/Recipe";
import FoodNews from "./components/FoodNews";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/store";

// main
function App() {
  return (
      <Router>
          <Header />
              <Switch>
                  <Route exact path={"/"} component={Home}/>
                  <Route path={"/pop"} component={POPFoodHouse}/>
                  <Route path={"/recommend"} component={RecommendFoodHouse}/>
                  <Route path={"/recipe"} component={Recipe}/>
                  <Route path={"/news"} component={FoodNews}/>
              </Switch>
          <Footer />
      </Router>
  );
}

export default App;
