import React from 'react';
import { Switch, Link, Route } from 'react-router-dom'
import Registration from './registration/Registration'
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to='/'>Home</Link>
      <Link to='/register'>Registration</Link>
      <Switch>
        <Route path='/register'>
        <Registration />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
