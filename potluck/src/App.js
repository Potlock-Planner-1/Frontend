import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import './App.css';

import PrivateRoute from "./components/PrivateRoute"
import PotluckList from "./components/PotluckList";
import Login from './components/Login';
import Registration from './components/Registration';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path='/register' component={Registration} />
        <PrivateRoute exact path= "/potluck-list" component={PotluckList} />
        <Route path='/'>
          <Redirect to='/potluck-list' />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
