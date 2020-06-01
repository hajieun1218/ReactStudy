import React from 'react';
import MovieReal2 from './components/MovieReal2';
import MovieDetail2 from "./components/MovieDetail2";
import MovieNews from './components/MovieNews';
import MoviePop from "./components/MoviePop";
import store from './store/store';
import {Provider} from "react-redux";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

function App() {
  return (
      <Router>
          <Provider store={store}>
              <div className={"container"}>
                  <Switch>
                      <Route exact path={"/"} component={MovieReal2}/>
                      <Route path={"/movie_detail/:no"} component={MovieDetail2}/>
                      <Route path={"/movie_news"} component={MovieNews}/>
                      <Route path={"/movie_pop"} component={MoviePop}/>
                  </Switch>
              </div>
          </Provider>
      </Router>
  );
}

export default App;
