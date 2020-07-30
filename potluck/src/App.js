import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom"
import './App.css';

import PrivateRoute from "./components/PrivateRoute"
import PotluckList from "./components/PotluckList";
import CreatePotluck from './components/CreatePotluck';
import Login from './components/Login';
import Registration from './components/Registration';
import PotluckDetails from './components/PotluckDetails';


function App() {
  return (
    <Router>
    <div className="App">
      <Link to="/create-potluck">Time to gather</Link>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path='/register' component={Registration} />
        <Route exact path='/create-potluck' component={CreatePotluck} />
        <PrivateRoute exact path= "/potluck-list" component={PotluckList} />
        <PrivateRoute exact path='/potluck/:id' component={PotluckDetails} />
        <Route path='/'>
          <Redirect to='/potluck-list' />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
