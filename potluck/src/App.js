import React from 'react';
import { Router, Route, Switch } from "react-router-dom"
import './App.css';

import PrivateRoute from "./components/PrivateRoute"
import PotluckList from "./components/PotluckList"

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login}/>
        <PrivateRoute exact path= "/potluck-list" component={PotluckList}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
