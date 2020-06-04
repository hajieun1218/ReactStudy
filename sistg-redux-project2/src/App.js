import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import POPFoodHouse from "./components/POPFoodHouse";
import RecommendFoodHouse from "./components/RecommendFoodHouse";
import Recipe from "./components/Recipe";
import FoodNews from "./components/FoodNews";
import CateFoodList from "./components/CateFoodList"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/store";

// main
function App() {
  return (
      <Provider store={store}>
          <Router>
              <Header />
                  <Switch>
                      <Route exact path={"/"} component={Home}/>
                      <Route path={"/pop"} component={POPFoodHouse}/>
                      <Route path={"/recommend"} component={RecommendFoodHouse}/>
                      <Route path={"/recipe"} component={Recipe}/>
                      <Route path={"/news"} component={FoodNews}/>
                      <Route path={"/cate_food/:cno"} component={CateFoodList}/>
                  </Switch>
              <Footer />
          </Router>
      </Provider>
  );
}

export default App;
