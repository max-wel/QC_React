import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './container/Home/Home';
import Login from './container/Login/Login';
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default App;
