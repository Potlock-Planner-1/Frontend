import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Registration from './registration/Registration'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/register'>
        <Registration />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
