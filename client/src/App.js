


import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Bookshelf from "./pages/Bookshelf";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import {} from 'dotenv/config'

function App() {
  
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/bookshelf" component={Bookshelf} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
