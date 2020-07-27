import React from 'react';
import './App.css';
import Login from './Login'
import { Switch, Link, Route } from 'react-router-dom'





function App() {

  return (
    <div className="App">
      <Route path='/'><Login /></Route>     
      <Route path='/register'></Route>
    </div>
  );
}

export default App;
