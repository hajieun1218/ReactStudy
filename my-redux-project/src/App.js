import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Lookup from "./components/Lookup";
import RateCur from "./components/RateCur";
import RateAll from "./components/RateAll";
import MovieNews from "./components/MovieNews";
import MovieDetail from "./components/MovieDetail"
import {Provider} from "react-redux";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import store from "./store/store"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header/>
          <Switch>
            <Route exact path={"/"} component={Lookup}/>
            <Route path={"/lookup"} component={Lookup}/>
            <Route path={"/ratecur"} component={RateCur}/>
            <Route path={"/rateall"} component={RateAll}/>
            <Route path={"/news"} component={MovieNews}/>
            <Route path={"/moviedetail/:mno"} component={MovieDetail}/>
          </Switch>
        <Footer/>
      </Router>
    </Provider>
  );
}

export default App;
